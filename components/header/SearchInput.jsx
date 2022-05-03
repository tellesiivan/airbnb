import { HiSearch } from "react-icons/hi";

export default function SearchInput() {
  return (
    <div className="flex p-1 overflow-hidden transition ease-in-out border rounded-full duration-400 border-slate-200 focus-within:shadow-md hover:shadow-md text-ellipsis">
      <input
        type="text"
        placeholder="Find your next adventure..."
        className="flex-1 w-64 pl-2 text-sm text-gray-500 bg-transparent outline-none sm:w-96 placeholder:text-gray-400 placeholder:text-sm "
      />
      <span className="items-center justify-center hidden text-white bg-red-400 rounded-full cursor-pointer w-7 h-7 md:flex ">
        <HiSearch size="1.2em" />
      </span>
    </div>
  );
}
