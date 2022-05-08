import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineGlobeAlt,
  HiMenu,
  HiUserCircle,
  HiOutlineUser,
} from "react-icons/hi";
import logo from "../../images/abrbLogo.png";
import SearchInput from "./SearchInput";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [reset, setReset] = useState(false);
  const [numOfGuest, setNumOfGuest] = useState(1);
  const [date, setDate] = useState({
    start: new Date(),
    end: new Date(),
  });

  const valueChecker = (value) => {
    setInputValue(value);

    if (value.trim().length > 0) {
      setShowDropdown(true);

      setReset(false);
    } else {
      setReset(true);
      setShowDropdown(false);
    }
  };

  const handleSelectionRange = (ranges) => {
    setDate({
      start: ranges.selection.startDate,
      end: ranges.selection.endDate,
    });
  };

  const selectionRange = {
    startDate: date.start,
    endDate: date.end,
    key: "selection", /// key of the selection is same as ranges.selection...
  };

  const submitSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: inputValue,
        from: date.start.toDateString(),
        to: date.end.toDateString(),
        guest: numOfGuest,
      },
    });
    setReset(true);
    setShowDropdown(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex justify-between w-full px-2 py-3 bg-white border-b shadow-sm sm:px-4 border-slate-200 `}
      >
        <Link href="/" passHref>
          <div className="relative items-center hidden my-auto cursor-pointer sm:flex sm:h-8">
            <Image src={logo} alt="Airbnb Logo" height="25" width="80" />
          </div>
        </Link>
        <SearchInput isValue={valueChecker} reset={reset} />
        <div className="flex items-center justify-end space-x-3 text-gray-500 ">
          <div className="items-center hidden space-x-2 text-sm cursor-pointer hover:text-gray-800 md:flex">
            <p className="">Become a host</p>
            <HiOutlineGlobeAlt />
          </div>
          <div className="items-center hidden p-2 space-x-2 border rounded-full cursor-pointer sm:flex border-slate-200">
            <HiMenu />
            <HiUserCircle />
          </div>
        </div>
      </header>
      {showDropdown && (
        <div className="fixed z-40 flex flex-col w-full col-span-3 bg-white border-b top-18 border-slate-300">
          <div className="w-full mx-auto md:w-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSelectionRange}
              className="w-full"
            />
            <div className="flex flex-row items-center h-12 px-4 mx-3 my-2 space-x-8 border md:px-2 border-slate-200 rounded-xl md:mx-0">
              <div className="flex items-center justify-between w-2/3">
                <h2 className="flex-grow text-xs font-semibold text-gray-500">
                  Number of Guest
                </h2>
                <input
                  type="number"
                  className="text-center text-gray-500 rounded-md outline-none w-14 bg-slate-200"
                  value={numOfGuest}
                  min={1}
                  onChange={(e) => setNumOfGuest(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between flex-1 space-x-4 text-xs">
                <button onClick={() => setReset(true)} className="">
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-white bg-red-400 rounded-lg"
                  onClick={submitSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
