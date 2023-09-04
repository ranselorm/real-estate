import React from "react";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>

        {/* buttons */}
        <div className="flex items-center gap-x-6">
          <Link to="" className="hover:text-[#008B8B] transition duration-300">
            Login
          </Link>
          <Link
            to=""
            className="bg-[#008B8B] text-white px-4 py-2 hover:bg-[#1d5353] transition-all duration-300 rounded-lg"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
