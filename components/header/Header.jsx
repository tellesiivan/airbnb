import Image from "next/image";
import { HiOutlineGlobeAlt, HiMenu, HiUserCircle } from "react-icons/hi";
import logo from "../../images/abrbLogo.png";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between w-full px-2 py-3 bg-white border-b shadow-sm sm:px-4 border-slate-200">
      <div className="relative flex items-center my-auto cursor-pointer sm:h-8">
        <Image src={logo} alt="Airbnb Logo" height="25" width="80" />
      </div>
      <SearchInput />
      <div className="flex items-center justify-end space-x-3 text-gray-500 ">
        <div className="items-center hidden space-x-2 text-sm cursor-pointer hover:text-gray-800 md:flex">
          <p className="">Become a host</p>
          <HiOutlineGlobeAlt />
        </div>
        <div className="flex items-center p-2 space-x-2 border rounded-full cursor-pointer border-slate-200">
          <HiMenu />
          <HiUserCircle />
        </div>
      </div>
    </header>
  );
}
