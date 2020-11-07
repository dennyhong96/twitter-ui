import Link from "next/link";

const NEWS = [
  {
    type: "US elections • LIVE",
    title:
      "Election results: Voters await results in key swing states as ballot counting continues",
    img:
      "https://pbs.twimg.com/semantic_core_img/1324862716528353281/dsCileeJ?format=jpg&name=360x360",
  },
  {
    type: "US news • This morning",
    title:
      "Special Counsel has opened an investigation into Trump's use of the White House for campaign-related activities, Reuters reports",
    img:
      "https://pbs.twimg.com/semantic_core_img/1324714647480459265/yN-hiB9E?format=jpg&name=240x240",
  },
  {
    type: "In memoriam • Earlier today",
    title: "Rapper King Von, 26, was shot and killed",
    img:
      "https://pbs.twimg.com/semantic_core_img/1324788828335321090/RJK-Xbc1?format=jpg&name=240x240",
  },
  {
    type: "US elections • Last night",
    title:
      "Special Counsel has opened an investigation into Trump's use of the White House for campaign-related activities, Reuters reports",
    img:
      "https://pbs.twimg.com/semantic_core_img/1324524356089700352/mCqeO9pM?format=jpg&name=360x360",
  },
  {
    type: "US elections • LIVE",
    title: "Washington: Get local updates about the elections",
    img:
      "https://pbs.twimg.com/semantic_core_img/1305178648958304256/9AN-ANC_?format=png&name=360x360",
  },
];

const Trending = ({ className = "" }) => {
  return (
    <div
      className={`pt-3 bg-tertiary rounded-2xl overflow-hidden ${className}`}
    >
      <h2 className="px-4 pb-3 text-xl font-black tracking-wide border-b border-gray-800">
        What's happending
      </h2>

      {/* Trending News */}
      {NEWS.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between px-4 py-3 border-b border-gray-800 bg-transparent cursor-pointer hover:bg-tertiary-light subtle-transition"
        >
          <div className="flex-grow mr-4">
            <p className="text-sm text-gray-500 mb-2">
              {item.type.split(" • ")[0]} •{" "}
              <span
                className={`${
                  idx === 0 &&
                  "bg-pink-hot text-gray-200 uppercase font-bold p-1 rounded-md tracking-wide"
                }`}
              >
                {item.type.split("•")[1]}
              </span>
            </p>
            <h3 className="font-bold  leading-tight">{item.title}</h3>
          </div>
          <div className="">
            <img
              src={item.img}
              alt="item.title"
              className="block w-18 h-18 object-cover rounded-xl max-w-none"
            />
          </div>
        </div>
      ))}
      {/* Trending News End */}

      <Link href="/">
        <a className="block px-4 py-3 text-primary bg-transparent cursor-pointer hover:bg-tertiary-light subtle-transition">
          Show more
        </a>
      </Link>
    </div>
  );
};

export default Trending;
