import React, { useContext } from "react";

// import house context
import { HouseContext } from "./HouseContext";

//component
import House from "./House";

// link
import { Link } from "react-router-dom";

//icons
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="animate-spin mx-auto text-[#008B8B] text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing found!
      </div>
    );
  }

  return (
    <section className="mb-20 mt-[450px] lg:mt-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
