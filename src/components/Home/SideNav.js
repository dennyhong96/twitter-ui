import Link from "next/Link";

import TwitterLogo from "../icons/TwitterLogo";
import HomeIcon from "../icons/Nav/HomeIcon";
import HashIcon from "../icons/Nav/HashIcon";
import BellIcon from "../icons/Nav/BellIcon";
import MessageIcon from "../icons/Nav/MessageIcon";
import BookmarkIcon from "../icons/Nav/BookmarkIcon";
import ListsIcon from "../icons/Nav/ListsIcon";
import ProfileIcon from "../icons/Nav/ProfileIcon";
import MoreIcon from "../icons/Nav/MoreIcon";

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

const SideNav = () => {
  return (
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
  );
};

export default SideNav;
