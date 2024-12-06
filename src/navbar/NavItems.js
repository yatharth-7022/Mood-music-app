import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { BsJournal } from "react-icons/bs";

const navIcons = [
  { id: "home", icon: <IoMdHome /> },
  { id: "analytics", icon: <SiGoogleanalytics /> },
  { id: "playlist", icon: <BiSolidPlaylist /> },
  { id: "settings", icon: <IoIosSettings /> },
  { id: "journal", icon: <BsJournal /> },
];
function NavItems() {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      <div>
        <img clasName="h-10 w-10" src="/assets/Frame.png" alt="logo" />
      </div>
      {navIcons.map((navIcon) => (
        <div
          key={navIcon.id}
          className={`h-50 w-[100%] rounded-l-lg ${isActive === navIcon.id ? "bg-black text-white" : "text-iconsGrey"} py-3 pl-3 text-2xl`}
        >
          <button
            onClick={() => setIsActive(navIcon.id)}
            className="hover:pointer m-0 border-0 p-0"
          >
            {navIcon.icon}
          </button>
        </div>
      ))}
    </>
  );
}

export default NavItems;
