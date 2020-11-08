import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TimeIcon from "../icons/HomeHeader/TimeIcon";
import StarsIcon from "../icons/StarsIcon";
import SettingIcon from "../icons/HomeHeader/SettingIcon";
import BackIcon from "../icons/HomeHeader/BackIcon";

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800 bg-body sticky top-0 z-10">
      <span className="text-xl font-black tracking-wide">Latest Tweets</span>
      <div className="relative">
        <Menu>
          {({ open }) => (
            <Fragment>
              <Menu.Button className="p-2 rounded-full bg-transparent hover:bg-secondary cursor-pointer subtle-transition">
                <StarsIcon className="text-primary" />
              </Menu.Button>

              <AnimatePresence>
                {open && (
                  <Menu.Items
                    as={motion.div}
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      visible: {
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.15 },
                      },
                      exit: {
                        opacity: 0,
                        height: 0,
                        transition: { duration: 0.15 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    static
                    className="overflow-hidden absolute right-0 top-0 w-80 bg-body twitter-shadow pt-4 rounded-md focus:outline-none"
                  >
                    <div className="flex flex-col items-center">
                      <TimeIcon className="text-5xl mb-4" />
                      <h4 className="text-xl font-bold text-center leading-tight border-b border-gray-800 pb-4">
                        Latest Tweets show up as they happen
                      </h4>
                    </div>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={`flex items-center px-5 py-4 bg-body focus:outline-none ${
                            active && "bg-body-light"
                          }`}
                        >
                          <BackIcon className="text-2xl text-gray-500 mr-3" />
                          <div className="flex flex-col flex-grow">
                            <span>Go back Home</span>
                            <span className="text-gray-500 text-sm">
                              You'l see Top Tweets first
                            </span>
                          </div>
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={`flex items-center px-5 py-4 bg-body focus:outline-none ${
                            active && "bg-body-light"
                          }`}
                        >
                          <SettingIcon className="text-2xl text-gray-500 mr-3" />
                          <span>View content preferences</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                )}
              </AnimatePresence>
            </Fragment>
          )}
        </Menu>
      </div>
    </header>
  );
};

export default MainHeader;
