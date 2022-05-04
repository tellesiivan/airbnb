import { HiSearch } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function SearchInput({ isValue, reset }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (reset) {
      setSearchInput("");
      isValue("");
    }
  }, [reset]);

  const getValue = (e) => {
    setSearchInput(e.target.value);
    isValue(e.target.value);
  };

  return (
    <div className="flex p-1 overflow-hidden transition ease-in-out border rounded-full duration-400 border-slate-200 focus-within:shadow-md hover:shadow-md text-ellipsis">
      <input
        type="text"
        value={searchInput}
        onChange={getValue}
        placeholder="Start your search..."
        className="flex-1 w-64 pl-4 font-medium text-gray-600 bg-transparent outline-none sm:w-96 placeholder:text-gray-500 placeholder:text-sm md:text-sm"
      />
      <span className="flex items-center justify-center w-8 h-8 text-white bg-red-400 rounded-full cursor-pointer sm:w-9 sm:h-9 ">
        <HiSearch size="1.2em" />
      </span>
    </div>
  );
}
