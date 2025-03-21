import { RiSearch2Line } from "react-icons/ri";
import FilterDropdown from "./FilterDropdown";
import FilterRange from "./FilterRange";
const Search = () => {
  return (
    <div className="px-[30px] py-6 max-w-100 lg:max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-2xl bg-[#8c827367] lg:backdrop-blur rounded-lg">
      <FilterDropdown />
      <FilterDropdown />
      <FilterDropdown />
      <FilterRange />
      <button className="bg-dark-blue w-full lg:max-w-[160px] h-16 rounded-lg flex justify-center items-center text-off-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;