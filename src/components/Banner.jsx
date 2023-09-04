import React from "react";
// import image
import Image from "../assets/img/house-banner.png";
// import component
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-end text-center lg:text-left justify-end flex-1 px-4 lg:px-0 max-w-[480px]">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-[#008B8B]">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className=" flex-1 flex justify-end items-end">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            recusandae quibusdam iste tempore eveniet reprehenderit eos sint a
            deleniti molestiae numquam at ut quo saepe obcaecati, illum, nobis
            suscipit possimus!
          </p>
        </div>
        {/* image */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <img src={Image} alt="" className="w-[550px]" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
