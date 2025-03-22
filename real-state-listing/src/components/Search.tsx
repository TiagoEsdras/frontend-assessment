import { RiSearch2Line } from "react-icons/ri";
import FilterDropdown from "./FilterDropdown";
import FilterRange from "./FilterRange";
import { FaBath, FaBed, FaCar } from "react-icons/fa";
import { useContext } from "react";
import { ListingContext } from "../contexts/ListingContext";

const Search = () => {
  const context = useContext(ListingContext);
  const {
    bedroomsFilterValues, bedroomsFilterSelected, setBedroomFilterSelected,
    bathroomsFilterValues, bathroomsFilterSelected, setBathroomFilterSelected,
    parkingFilterValues, parkingFilterSelected, setParkingFilterSelected,
    handleSearchClick
  } = context!;

  return (
    <section id="search" className="mb-8">
      <div className="px-[30px] py-6 max-w-100 lg:max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-5 relative lg:-top-4 lg:shadow-2xl bg-[#8c827325] lg:backdrop-blur rounded-lg">
        <FilterDropdown
          icon={<FaBed className="text-2xl mr-[18px] text-dark-blue" />}
          title="Bedrooms"
          dropdownValues={bedroomsFilterValues}
          selectedValue={bedroomsFilterSelected}
          setSelectedValue={setBedroomFilterSelected}
        />
        <FilterDropdown
          icon={<FaBath className="text-2xl mr-[18px] text-dark-blue" />}
          title="Bathrooms"
          dropdownValues={bathroomsFilterValues}
          selectedValue={bathroomsFilterSelected}
          setSelectedValue={setBathroomFilterSelected}
        />
        <FilterDropdown
          icon={<FaCar className="text-2xl mr-[18px] text-dark-blue" />}
          title="Parking"
          dropdownValues={parkingFilterValues}
          selectedValue={parkingFilterSelected}
          setSelectedValue={setParkingFilterSelected}
        />
        <FilterRange
          min={40000}
          max={200000}
          currentMin={50000}
          currentMax={180000}
          title="Price Range"
        />
        <button onClick={handleSearchClick} className="bg-dark-blue w-full lg:max-w-[160px] h-16 rounded-lg flex justify-center items-center text-off-white text-lg">
          <RiSearch2Line />
        </button>
      </div>
    </section>
  );
};

export default Search;