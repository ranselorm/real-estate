import { useContext, useEffect, useState } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const prices = [
  {
    value: "Price range (any)",
  },
  {
    value: "100000 - 130000",
  },
  {
    value: "130000 - 160000",
  },
  {
    value: "160000 - 190000",
  },
  {
    value: "190000 - 220000",
  },

  {
    value: "100000 - 300000",
  },
  {
    value: "300000 - 400000",
  },
];

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left px-[18px] border rounded-lg h-[64px]"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[12px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-[#008B8B]"
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
