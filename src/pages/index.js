import SideNav from "../components/Home/SideNav";
import MainHeader from "../components/Home/MainHeader";
import TweetInput from "../components/Home/TweetInput";
import TweetCard from "../components/Home/TweetCard";
import SearchInput from "../components/Home/SearchInput";
import Trending from "../components/Home/Trending";
import Follow from "../components/Home/Follow";
import USERS from "../../users.json";

const Home = () => {
  return (
    <div className="container grid main-layout mx-auto h-screen overflow-y-hidden">
      {/* Side Navigation */}
      <SideNav />
      {/* Side Navigation End */}

      {/* Main */}
      <main className="relative h-full border-l border-r border-gray-800 overflow-y-scroll hide-scrollbar">
        <MainHeader />
        <TweetInput />

        {/* Tweet Cards */}
        {USERS.map((user, idx) => (
          <TweetCard key={idx} user={user} incrementId={idx} />
        ))}
      </main>
      {/* Main End */}

      {/* Aside */}
      <aside className="overflow-y-scroll hide-scrollbar pl-8 px-4">
        <SearchInput className="pb-4 sticky top-0 bg-body" />
        <Trending className="mb-4" />
        <Follow />
      </aside>
      {/* Aside End */}
    </div>
  );
};

export default Home;
