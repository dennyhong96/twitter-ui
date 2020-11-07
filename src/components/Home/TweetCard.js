import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import VerifiedIcon from "../icons/VerifiedIcon";
import CommentIcon from "../icons/Tweet/CommentIcon";
import HeartIcon from "../icons/Tweet/HeartIcon";
import RetweetIcon from "../icons/Tweet/RetweetIcon";
import ShareIcon from "../icons/Tweet/ShareIcon";
import MessageIcon from "../icons/Tweet/MessageIcon";
import AddBookmarkIcon from "../icons/Tweet/AddBookmarkIcon";
import CopyLinkIcon from "../icons/Tweet/CopyLinkIcon";
import ChevronDownIcon from "../icons/TweetDropdown/ChevronDownIcon";

import NotInterestedIcon from "../icons/TweetDropdown/NotInterestedIcon";
import UnfollowIcon from "../icons/TweetDropdown/UnfollowIcon";
import ListAddIcon from "../icons/TweetDropdown/ListAddIcon";
import MuteIcon from "../icons/TweetDropdown/MuteIcon";
import BlockIcon from "../icons/TweetDropdown/BlockIcon";
import EmbedIcon from "../icons/TweetDropdown/EmbedIcon";
import ReportIcon from "../icons/TweetDropdown/ReportIcon";

import { Fragment } from "react";

const ACTIONS = [
  {
    Icon: CommentIcon,
    color: "text-primary",
    bg: "bg-secondary",
    showQty: true,
  },
  {
    Icon: RetweetIcon,
    color: "text-green-500",
    bg: "bg-green-ghost",
    showQty: true,
  },
  {
    Icon: HeartIcon,
    color: "text-pink-500",
    bg: "bg-pink-ghost",
    showQty: true,
  },
];

const SHARE_OPTIONS = [
  { name: "Send via Direct Message", Icon: MessageIcon },
  { name: "Add Tweet to Bookmarks", Icon: AddBookmarkIcon },
  { name: "Copy link to Tweet", Icon: CopyLinkIcon },
];

const MORE_OPTIONS = [
  { name: "Not interested in this Tweet", Icon: NotInterestedIcon },
  { name: "Unfollow User", Icon: UnfollowIcon },
  { name: "Add/remove from Lists", Icon: ListAddIcon },
  { name: "Mute User", Icon: MuteIcon },
  { name: "Block User", Icon: BlockIcon },
  { name: "Embed Tweet", Icon: EmbedIcon },
  { name: "Report Tweet", Icon: ReportIcon },
];

const DROPDOWN_MENU_VARIANTS = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
};

const getRandNum = () => Math.floor(Math.random() * 1000);

// `incrementId` is for getting random images
const TweetCard = ({ user, incrementId }) => {
  return (
    <div className="flex py-3 px-4 border-b border-gray-800 w-full cursor-pointer bg-transparent hover:bg-body-light transition ease-out duration-200">
      {/* Card Left */}
      <div className="mr-4">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="block rounded-full w-14 h-14 object-cover max-w-none"
        />
      </div>
      {/* Card Lef End */}

      {/* Card Right */}
      <div className="flex-grow flex flex-col">
        {/* User Info Row */}
        <div className="flex items-center">
          <span className="font-bold mr-2">
            {user.name.first} {user.name.last}
          </span>
          <span className="mr-2">
            <VerifiedIcon className="text-xl" />
          </span>
          <span className="text-gray-500">@{user.login.username} • 15m</span>

          <div className="relative ml-auto">
            <Menu>
              {({ open }) => (
                <Fragment>
                  <Menu.Button className="p-1 bg-transparent hover:bg-secondary rounded-full cursor-pointer">
                    <ChevronDownIcon className="text-lg text-gray-500" />
                  </Menu.Button>
                  <AnimatePresence>
                    {open && (
                      <Menu.Items
                        static
                        as={motion.div}
                        variants={DROPDOWN_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute right-0 top-0 bg-body twitter-shadow rounded-md focus:outline-none"
                      >
                        {MORE_OPTIONS.map(({ name, Icon }, idx) => (
                          <Menu.Item key={idx}>
                            {({ active }) => (
                              <a
                                className={`whitespace-no-wrap block px-5 py-4 bg-transparent subtle-transition ${
                                  active && "bg-body-light"
                                }`}
                              >
                                <Icon className="inline-block text-lg text-gray-500 mr-2" />{" "}
                                {name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </AnimatePresence>
                </Fragment>
              )}
            </Menu>
          </div>
        </div>
        {/* User Info Row End */}

        {/* Content */}
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum
          provident tenetur temporibus mollitia blanditiis reiciendis iste est
          molestiae quaerat cumque maiores aut, cum perspiciatis?
        </p>
        {/* Content End */}

        {/* Image */}
        <div className="mb-2">
          <img
            src={`https://source.unsplash.com/random/800x400?sig=${incrementId}`}
            alt="Random Image"
            className="block rounded-3xl h-80 w-full object-cover max-w-none border border-gray-800"
          />
        </div>

        {/* Actions */}
        <div className="grid grid-cols-4 justify-items-start -ml-2">
          {ACTIONS.map(({ Icon, color, bg, showQty }, idx) => (
            <span key={idx} className="group flex items-center">
              <span
                className={`p-2 bg-transparent hover:${bg} cursor-pointer rounded-full`}
              >
                <Icon
                  className={`text-xl text-gray-500 group-hover:${color}`}
                />
              </span>
              {showQty && (
                <span
                  className={`ml-1 text-gray-500 text-sm group-hover:${color}`}
                >
                  {getRandNum()}
                </span>
              )}
            </span>
          ))}

          {/* Dropdown Menu */}
          <div className="relative">
            <Menu>
              {({ open }) => (
                <Fragment>
                  {/* Menu Button */}
                  <Menu.Button className="p-2 bg-transparent hover:bg-secondary cursor-pointer rounded-full">
                    <ShareIcon
                      className={`text-xl text-gray-500 group-hover:text-primary`}
                    />
                  </Menu.Button>
                  {/* Menu Button End */}

                  {/* Menu Items */}
                  <AnimatePresence>
                    {open && (
                      <Menu.Items
                        as={motion.div}
                        variants={DROPDOWN_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        static
                        className="absolute top-0 right-0 bg-body twitter-shadow rounded-md focus:outline-none"
                      >
                        {SHARE_OPTIONS.map(({ name, Icon }, idx) => (
                          <Menu.Item key={idx}>
                            {({ active }) => (
                              <a
                                className={`block whitespace-no-wrap py-3 px-5 bg-transparent subtle-transition ${
                                  active && "bg-body-light"
                                }`}
                              >
                                <Icon className="inline-block text-xl mr-2 text-gray-500" />
                                {name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </AnimatePresence>
                  {/* Menu Items End */}
                </Fragment>
              )}
            </Menu>
            {/* Dropdown Menu End */}
          </div>
        </div>
        {/* Actions End */}
      </div>

      {/* Card Right End */}
    </div>
  );
};

export default TweetCard;
