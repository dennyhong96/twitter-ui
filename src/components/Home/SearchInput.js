import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SearchIcon from "../icons/SearchIcon";

const SEARCH_DROPDOWN_VARIANTS = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const SearchInput = ({ className = "" }) => {
  const [{ searchText, isFocused, isMouseIn }, setState] = useState({
    searchText: "",
    isFocused: false,
    isMouseIn: false,
  });

  const handleChange = (evt) => {
    setState((prev) => ({ ...prev, searchText: evt.target.value }));
  };

  const handleFocus = () => {
    setState((prev) => ({ ...prev, isFocused: true }));
  };

  const handleBlur = () => {
    setState((prev) => ({ ...prev, isFocused: false }));
  };

  const handleMouseEnter = () => {
    setState((prev) => ({ ...prev, isMouseIn: true }));
  };

  const handleMouseLeave = () => {
    setState((prev) => ({ ...prev, isMouseIn: false }));
  };

  return (
    <div className={`flex flex-col pt-2 ${className}`}>
      <div className="relative">
        {/* Search Icon */}
        <SearchIcon
          className={`absolute text-xl left-4 text-gray-500 subtle-transition ${
            isFocused && "text-primary"
          }`}
          style={{ top: 10 }}
        />
        {/* Search Icon End */}

        {/* Search Input */}
        <input
          value={searchText}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search Twitter"
          className={`pl-14 pr-4 py-2 w-full rounded-full bg-gray-800 border border-transparent outline-none subtle-transition focus:bg-transparent focus:border-primary`}
        />
        {/* Search Input End */}

        {/* Search Dropdown */}
        <AnimatePresence>
          {(isFocused || isMouseIn) && (
            <motion.div
              variants={SEARCH_DROPDOWN_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute left-0 right-0 twitter-shadow rounded-md p-4 bg-body"
            >
              <p className="text-gray-500 text-center mb-14">
                Try searching for people, topics, or keywords
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Search Dropdown End */}
      </div>
    </div>
  );
};

export default SearchInput;
