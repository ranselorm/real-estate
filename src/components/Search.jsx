// import components
import { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { HouseContext } from "./HouseContext";

// import icons
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  const { houses } = useContext(HouseContext);
  console.log(houses);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] flex flex-col lg:flex-row justify-between mx-auto mt-[40px] gap-4 lg:shadow-1 rounded-lg items-center">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button className="bg-[#008B8B] text-white px-10 py-4 hover:bg-[#1d5353] transition-all duration-300 rounded-lg w-full lg:w-[100px] flex justify-center">
        <RiSearch2Line className="text-xl" />
      </button>
    </div>
  );
};

export default Search;
