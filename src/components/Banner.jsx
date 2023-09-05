import React from "react";

// import link
import { Link } from "react-router-dom";
// import image
import Image from "../assets/img/house-banner.png";
// import component
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-end flex-1 px-4 lg:px-0 max-w-[480px]">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-[#008B8B]">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className=" flex-1 flex justify-end items-end text-[18px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            recusandae quibusdam iste tempore eveniet reprehenderit eos sint a
            deleniti molestiae numquam at ut quo saepe obcaecati, illum, nobis
            suscipit possimus!
          </p>
          <div className="flex gap-x-4 w-3/4 mt-10 justify-center">
            <Link
              to=""
              className="bg-[#008B8B] text-white py-3 px-4 hover:bg-transparent hover:text-black hover:border-[#008B8B] border transition-all duration-300 rounded w-full lg:flex items-center justify-center hidden"
            >
              Discover More
            </Link>
            <Link
              to=""
              className="border border-[#008B8B] hover:bg-[#1d5353] hover:text-white text-[#008B8B] transition-all duration-300 px-8 py-[7px] rounded w-full lg:flex items-center justify-center hidden"
            >
              About Us
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="lg:flex flex-1 justify-end items-end mb-10 lg:mb-0">
          <img src={Image} alt="" className="w-[390px] lg:w-[550px]" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
