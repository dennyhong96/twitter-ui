import React from "react";

const ProgressIcon = ({ className, ...rest }) => {
  return (
    <svg
      {...rest}
      className={`fill-current text-white ${className}`}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <circle
        cx="50%"
        cy="50%"
        fill="none"
        strokeWidth="2"
        r="9"
        stroke="#1da1f2"
      ></circle>
    </svg>
  );
};

export default ProgressIcon;
