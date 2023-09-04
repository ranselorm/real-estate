import React from "react";
import { BiBed, BiArea, BiBath } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[400px] lg:max-w-[358px] mx-auto cursor-pointer hover:shadow-2xl transition-all duration-300">
      <img src={image} alt="" className="mb-8 w-full" />
      <div className="flex gap-x-2 mb-4 text-sm">
        <div className="bg-[#6B8E23] rounded-full text-white px-3 ">{type}</div>
        <div className="bg-[#008B8B] rounded-full text-white px-3 ">
          {country}
        </div>
      </div>
      <div className="max-w-[260px] mb-4">{address}</div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1 text-gray-600">
          <div className="">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center gap-x-1 text-gray-600">
          <div className="">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center gap-x-1 text-gray-600">
          <div className="">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-sm my-2">${price}</div>
    </div>
  );
};

export default House;
