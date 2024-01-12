import { CiSearch } from "react-icons/ci";
import { Inter } from "next/font/google";
const Search = () => {
    return (
        <div
            className={`bg-[#F2F2F2] ring-1 text-[.7rem] ring-slate-200/80 hidden  min-w-[20rem] lg:flex items-center px-3 rounded`}
        >
            <CiSearch className="text-slate-400 text-xl font-semibold" />
            <input
                type="text"
                placeholder="Search features, tutorials , etc"
                className="bg-transparent text-sm p-2 flex-1 placeholder:text-[.75rem] placeholder:font-normal focus:outline-none"
            />
        </div>
    );
};

export default Search;
