import Link from "next/link";

import VerifiedIcon from "../icons/VerifiedIcon";
import USERS from "../../../users.json";

const Follow = ({ className = "" }) => {
  return (
    <div
      className={`pt-3 bg-tertiary rounded-2xl overflow-hidden ${className}`}
    >
      <h2 className="px-4 pb-3 text-xl font-black tracking-wide border-b border-gray-800">
        Who to follow
      </h2>

      {USERS.slice(USERS.length - 2).map((user, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center px-4 py-3 border-b border-gray-800 bg-transparent cursor-pointer hover:bg-tertiary-light subtle-transition"
        >
          <div className="flex items-center">
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="block w-14 h-14 object-cover rounded-full mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold hover:underline">
                {user.name.first} {user.name.last}{" "}
                <VerifiedIcon className="inline-block text-xl align-text-bottom" />
              </span>
              <span className="text-gray-500">@{user.login.username}</span>
            </div>
          </div>
          <button className="bg-tertiary px-5 py-1 rounded-full border border-primary font-bold text-primary hover:bg-tertiary-light subtle-transition">
            Follow
          </button>
        </div>
      ))}

      <Link href="/">
        <a className="block px-4 py-3 text-primary bg-transparent cursor-pointer hover:bg-tertiary-light subtle-transition">
          Show more
        </a>
      </Link>
    </div>
  );
};

export default Follow;
