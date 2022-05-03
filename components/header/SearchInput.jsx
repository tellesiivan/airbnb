import { HiSearch } from "react-icons/hi";

export default function SearchInput() {
  return (
    <div className="flex p-1 overflow-hidden transition ease-in-out border rounded-full duration-400 border-slate-200 focus-within:shadow-md hover:shadow-md text-ellipsis">
      <input
        type="text"
        placeholder="Start your search..."
        className="flex-1 w-64 pl-4 text-sm font-medium text-gray-900 bg-transparent outline-none sm:w-96 placeholder:text-gray-800 placeholder:text-sm "
      />
      <span className="flex items-center justify-center w-8 h-8 text-white bg-red-400 rounded-full cursor-pointer sm:w-10 sm:h-10 ">
        <HiSearch size="1.2em" />
      </span>
    </div>
  );
}
