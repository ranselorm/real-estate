import React from "react";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiBed, BiArea, BiBath } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <article className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="flex gap-x-4 text-sm mb-4 lg:mb-0">
            <div className="bg-[#6B8E23] rounded-full text-white px-3 ">
              {house.type}
            </div>
            <div className="bg-[#008B8B] rounded-full text-white px-3 ">
              {house.country}
            </div>
          </div>
          <div className="text-2xl my-4 lg:my-0">$ {house.price}</div>
        </article>
        <section className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <article className="flex gap-x-6 text- items-center text-[#008B8B] mb-6">
              <div className="flex items-center gap-x-2">
                <BiBed className="text-xl" />
                <p>{house.bedrooms}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <BiBath className="text-xl" />
                <p>{house.bathrooms}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <BiArea className="text-xl" />
                <p>{house.surface}</p>
              </div>
            </article>
            <div>{house.description}</div>
          </div>
          <article className="flex-1 mb-8 w-full bg-white border border-gray-300 rounded-lg px-4 py-8">
            <div className="flex items-center gap-x-5 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <p className="font-bold text-lg">{house.agent.name}</p>
                <Link to="" className="text-sm text-[#008B8B]">
                  View Listings
                </Link>
              </div>
            </div>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input
                type="text"
                className="border border-gray-300 focus:border-[#008B8B] outline-none w-full rounded px-4 h-12 text-sm"
                placeholder="Name*"
              />
              <input
                type="text"
                className="border border-gray-300 focus:border-[#008B8B] outline-none w-full rounded px-4 h-12 text-sm"
                placeholder="Email*"
              />
              <input
                type="text"
                className="border border-gray-300 focus:border-[#008B8B] outline-none w-full rounded px-4 h-12 text-sm"
                placeholder="Phone"
              />
              <textarea
                className="border border-gray-300 focus:border-[#008B8B] outline-none w-full rounded p-4 h-36 text-sm resize-none"
                placeholder="Message*"
                defaultValue="Hello, I'm interested in [Modern apartments]"
              ></textarea>
              <div className="flex gap-x-4 mt-4">
                <button className="bg-[#008B8B] text-white py-2 px-4 hover:bg-transparent hover:text-black hover:border-[#008B8B] border transition-all duration-300 rounded w-full">
                  Send message
                </button>
                <button className="border border-[#008B8B] hover:bg-[#1d5353] hover:text-white text-[#008B8B] transition-all duration-300 px-8 py-[7px] rounded w-full">
                  Call
                </button>
              </div>
            </form>
          </article>
        </section>
      </div>
    </section>
  );
};

export default PropertyDetails;
