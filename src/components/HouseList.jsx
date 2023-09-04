import React, { useContext } from "react";

// import house context
import { HouseContext } from "./HouseContext";

//component
import House from "./House";

// link
import { Link } from "react-router-dom";

//icons
import { ImSpinner } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  return (
    <section className="mb-20">
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
