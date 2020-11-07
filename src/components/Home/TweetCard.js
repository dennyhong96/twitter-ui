import VerifiedIcon from "../icons/VerifiedIcon";
import CommentIcon from "../icons/Tweet/CommentIcon";
import HeartIcon from "../icons/Tweet/HeartIcon";
import RetweetIcon from "../icons/Tweet/RetweetIcon";
import ShareIcon from "../icons/Tweet/ShareIcon";
import ChevronDownIcon from "../icons/TweetDropdown/ChevronDownIcon";

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
  { Icon: ShareIcon, color: "text-primary", bg: "bg-secondary" },
];

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
          <span className="ml-auto p-1 bg-transparent hover:bg-secondary rounded-full cursor-pointer">
            <ChevronDownIcon className="text-lg text-gray-500" />
          </span>
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
            <span className="group flex items-center">
              <span
                key={idx}
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
        </div>
        {/* Actions End */}
      </div>

      {/* Card Right End */}
    </div>
  );
};

export default TweetCard;
