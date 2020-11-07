import StarsIcon from "../icons/StarsIcon";

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800 bg-body sticky top-0 z-10">
      <span className="text-xl font-black tracking-wide">Home</span>
      <span className="p-2 rounded-full bg-transparent hover:bg-secondary cursor-pointer subtle-transition">
        <StarsIcon className="text-primary" />
      </span>
    </header>
  );
};

export default MainHeader;
