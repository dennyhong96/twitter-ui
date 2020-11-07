import Link from "next/link";

import TweetInput from "../components/Home/TweetInput";
import TweetCard from "../components/Home/TweetCard";
import SearchInput from "../components/Home/SearchInput";
import Trending from "../components/Home/Trending";
import Follow from "../components/Home/Follow";

import USERS from "../../users.json";

import TwitterLogo from "../components/icons/TwitterLogo";
import HomeIcon from "../components/icons/Nav/HomeIcon";
import HashIcon from "../components/icons/Nav/HashIcon";
import BellIcon from "../components/icons/Nav/BellIcon";
import MessageIcon from "../components/icons/Nav/MessageIcon";
import BookmarkIcon from "../components/icons/Nav/BookmarkIcon";
import ListsIcon from "../components/icons/Nav/ListsIcon";
import ProfileIcon from "../components/icons/Nav/ProfileIcon";
import MoreIcon from "../components/icons/Nav/MoreIcon";
import StarsIcon from "../components/icons/StarsIcon";

const SIDE_NAV_OPTIONS = [
  { title: "Home", Icon: HomeIcon, active: true },
  { title: "Explore", Icon: HashIcon },
  { title: "Notification", Icon: BellIcon },
  { title: "Message", Icon: MessageIcon },
  { title: "Bookmarks", Icon: BookmarkIcon },
  { title: "Lists", Icon: ListsIcon },
  { title: "Profile", Icon: ProfileIcon },
  { title: "More", Icon: MoreIcon },
];

const Home = () => {
  return (
    <div className="container grid main-layout mx-auto h-screen overflow-y-hidden">
      {/* Side Navigation */}
      <nav className="flex flex-col items-start">
        {/* Twitter Logo */}
        <Link href="/">
          <a className="group block my-2 p-2 rounded-full hover:bg-secondary subtle-transition">
            <TwitterLogo className="text-4xl group-hover:text-primary subtle-transition" />
          </a>
        </Link>
        {/* Twitter Logo End */}

        {/* Nav Links */}
        <ul className="w-full">
          {SIDE_NAV_OPTIONS.map(({ title, Icon, active }, idx) => (
            <li key={idx} className="mb-2 last:mb-0">
              <Link href="/">
                <a className="group flex justify-start">
                  <span className="flex items-center pl-2 pr-4 py-3 rounded-full bg-transparent group-hover:bg-secondary subtle-transition">
                    <span>
                      {
                        <Icon
                          className={`group-hover:text-primary subtle-transition ${
                            active && "text-primary"
                          }`}
                        />
                      }
                    </span>
                    <span
                      className={`ml-4 text-xl font-bold group-hover:text-primary subtle-transition ${
                        active && "text-primary"
                      }`}
                    >
                      {title}
                    </span>
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* Nav Links End */}
      </nav>
      {/* Side Navigation End */}

      {/* Main */}
      <main className="relative h-full border-l border-r border-gray-800 overflow-y-scroll hide-scrollbar">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800 bg-body sticky top-0 z-10">
          <span className="text-xl font-black tracking-wide">Home</span>
          <span className="p-2 rounded-full bg-transparent hover:bg-secondary cursor-pointer subtle-transition">
            <StarsIcon className="text-primary" />
          </span>
        </header>
        {/* Header End */}

        {/* Tweet Input */}
        <TweetInput />
        {/* Tweet Input End */}

        {/* Tweet Cards */}
        {USERS.map((user, idx) => (
          <TweetCard key={idx} user={user} incrementId={idx} />
        ))}
        {/* Tweet Cards End */}
      </main>
      {/* Main End */}

      {/* Aside */}
      <aside className="overflow-y-scroll hide-scrollbar pl-8 px-4">
        {/* Search Input */}
        <SearchInput className="pb-4 sticky top-0 bg-body" />
        {/* Search Input End */}

        {/* What’s happening */}
        <Trending className="mb-4" />
        {/* What’s happening End */}

        {/* Who to follow */}
        <Follow />
        {/* Who to follow End */}
      </aside>
    </div>
  );
};

export default Home;
