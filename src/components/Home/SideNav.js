import { Fragment, useState } from "react";
import Link from "next/Link";
import { Menu } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

import TwitterLogo from "../icons/TwitterLogo";
import HomeIcon from "../icons/Nav/HomeIcon";
import HashIcon from "../icons/Nav/HashIcon";
import BellIcon from "../icons/Nav/BellIcon";
import MessageIcon from "../icons/Nav/MessageIcon";
import BookmarkIcon from "../icons/Nav/BookmarkIcon";
import ListsIcon from "../icons/Nav/ListsIcon";
import ProfileIcon from "../icons/Nav/ProfileIcon";
import MoreIcon from "../icons/Nav/MoreIcon";
import ChevronDownIcon from "../icons/TweetDropdown/ChevronDownIcon";
import CheckIcon from "../icons/Nav/CheckIcon";

const ACCOUNT_INFO_VARIANTS = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.1 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.1 } },
};

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
const AVATAR_URL =
  "https://pbs.twimg.com/profile_images/1294112797698043904/U4GAUapX_400x400.jpg";

const SideNav = () => {
  const [{ selectedItemIdx }, setState] = useState({
    selectedItemIdx: 0,
  });

  const handleSelect = (idx) => {
    setState((prev) => ({ ...prev, selectedItemIdx: idx }));
  };

  return (
    <nav className="relative flex flex-col items-start pr-8">
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

      {/* Account Info Dropup */}
      <div className="absolute bottom-4 left-0 right-0">
        <Menu>
          {({ open }) => (
            <Fragment>
              <Menu.Button className="flex items-center w-full bg-body p-2 rounded-full cursor-pointer hover:bg-body-light subtle-transition">
                <div className="flex items-center">
                  <img
                    src={AVATAR_URL}
                    alt="Denny Hong"
                    className="block w-12 h-12 rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold">Denny Hong</span>
                    <span className="text-gray-500">@DennyHong3</span>
                  </div>
                </div>
                <span className="ml-auto p-2 ">
                  <ChevronDownIcon className="text-xl" />
                </span>
              </Menu.Button>

              <AnimatePresence>
                {open && (
                  <Menu.Items
                    as={motion.div}
                    variants={ACCOUNT_INFO_VARIANTS}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    static
                    className="bg-body w-full left-2 z-10 twitter-shadow rounded-xl absolute bottom-16 focus:outline-none"
                  >
                    <div className="flex items-center p-5">
                      <img
                        src={AVATAR_URL}
                        alt="Denny Hong"
                        className="block w-12 h-12 rounded-full mr-2"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold">Denny Hong</span>
                        <span className="text-gray-500">@DennyHong3</span>
                      </div>
                      <span className="ml-auto p-2">
                        <CheckIcon className="text-xl text-primary" />
                      </span>
                    </div>

                    {["Add an existing account", "Log out @DennyHong3"].map(
                      (item, idx) => (
                        <Menu.Item key={idx}>
                          {({ active }) => (
                            <a
                              href="/"
                              className={`whitespace-no-wrap block px-5 py-4 subtle-transition border-t border-gray-800 focus:outline-none ${
                                active && "bg-body-light"
                              }`}
                            >
                              {item}
                            </a>
                          )}
                        </Menu.Item>
                      )
                    )}
                  </Menu.Items>
                )}
              </AnimatePresence>
            </Fragment>
          )}
        </Menu>
        {/* Account Info Dropup End */}
      </div>
    </nav>
  );
};

export default SideNav;
