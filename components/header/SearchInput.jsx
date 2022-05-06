import { HiSearch } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function SearchInput({ isValue, reset }) {
  const { query } = useRouter();
  const { from, to, guest, location } = query;

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (reset) {
      setSearchInput("");
      isValue("");
    }
  }, [reset]);

  const isPlaceholder = (from || to || guest || location) !== undefined;

  const range =
    from &&
    `${format(new Date(from), "MMM dd")} - ${format(
      new Date(to),
      "MMM dd yyyy"
    )}`;

  const getValue = (e) => {
    setSearchInput(e.target.value);
    isValue(e.target.value);
  };

  return (
    <div className="flex w-full p-1 overflow-hidden transition ease-in-out border rounded-full duration-400 border-slate-200 focus-within:shadow-md hover:shadow-md text-ellipsis sm:w-96">
      <input
        type="text"
        value={searchInput}
        onChange={getValue}
        placeholder={
          isPlaceholder
            ? `${location} | ${guest} guest | ${range}`
            : "Start your search..."
        }
        className="flex-1 w-full pl-4 font-medium text-gray-600 bg-transparent outline-none placeholder:text-gray-500 placeholder:text-xs md:text-sm"
      />
      <span className="flex items-center justify-center p-2 text-white bg-red-400 rounded-full cursor-pointer sm:p-1 sm:w-9 sm:h-9 ">
        <HiSearch size="1.2em" />
      </span>
    </div>
  );
}
