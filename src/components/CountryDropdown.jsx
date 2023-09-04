import { useContext, useEffect, useState } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import headless ui

import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { countries, country, setCountry } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left px-[18px] border rounded-lg h-[64px]"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[12px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-[#008B8B]"
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
