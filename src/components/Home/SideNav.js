import { useState } from "react";
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
  { title: "Home", Icon: HomeIcon },
  { title: "Explore", Icon: HashIcon },
  { title: "Notification", Icon: BellIcon },
  { title: "Message", Icon: MessageIcon },
  { title: "Bookmarks", Icon: BookmarkIcon },
  { title: "Lists", Icon: ListsIcon },
  { title: "Profile", Icon: ProfileIcon },
  { title: "More", Icon: MoreIcon },
];

const SideNav = () => {
  const [{ selectedItemIdx }, setState] = useState({
    selectedItemIdx: 0,
  });

  const handleSelect = (idx) => {
    setState((prev) => ({ ...prev, selectedItemIdx: idx }));
  };

  return (
    <nav className="flex flex-col items-start pr-8">
      {/* Twitter Logo */}
      <Link href="/">
        <a className="group block my-2 p-2 rounded-full hover:bg-secondary subtle-transition">
          <TwitterLogo className="text-4xl group-hover:text-primary subtle-transition" />
        </a>
      </Link>
      {/* Twitter Logo End */}

      {/* Nav Links */}
      <ul className="w-full mb-4">
        {SIDE_NAV_OPTIONS.map(({ title, Icon }, idx) => (
          <li key={idx} className="mb-2 last:mb-0">
            <Link href="/">
              <a
                className="group flex justify-start"
                onClick={handleSelect.bind(this, idx)}
              >
                <span className="flex items-center pl-2 pr-4 py-3 rounded-full bg-transparent group-hover:bg-secondary subtle-transition">
                  <span>
                    {
                      <Icon
                        className={`group-hover:text-primary subtle-transition ${
                          selectedItemIdx === idx && "text-primary"
                        }`}
                      />
                    }
                  </span>
                  <span
                    className={`ml-4 text-xl font-bold group-hover:text-primary subtle-transition ${
                      selectedItemIdx === idx && "text-primary"
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

      <button className="text-lg font-bold bg-primary rounded-full py-3 w-full hover:bg-primary-600 subtle-transition">
        Tweet
      </button>
    </nav>
  );
};

export default SideNav;
