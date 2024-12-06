import { CiSearch } from "react-icons/ci";
import "../App.css";
function Header() {
  return (
    <div className="relative z-10 flex h-20 w-full flex-row justify-between pl-[10rem] pr-20 pt-10 text-white">
      <div className="relative w-full max-w-[250px]">
        <CiSearch className="stroke-width-2 absolute left-3 top-1/2 h-10 w-5 -translate-y-1/2 transform text-white" />
        <input
          className="bg-searchGrey text-searchGrey h-10 w-full rounded-3xl pl-10 pr-4 text-white"
          type="text"
          placeholder="Search here..."
        />
      </div>
      <h1>Dashboard</h1>
      <h2>user</h2>
    </div>
  );
}

export default Header;
