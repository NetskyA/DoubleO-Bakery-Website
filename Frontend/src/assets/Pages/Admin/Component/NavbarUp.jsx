import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector untuk mengambil username dari Redux store
import LogoNetSkyA from "../../../Image/icon/NetSKYA.png";
import LogoProfile from "../../../Image/icon/logo-profile.svg";
import LogoExit from "../../../Image/icon/logo-exit.svg";

const NavbarUp = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  const username = useSelector((state) => state.user.username); // Ambil username dari Redux store

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate("/login/user/nsateam/admin");
  };

  return (
    <div className="flex justify-between items-center bg-white px-6 py-1 h-12 shadow-md">
      <div className="flex items-center">
        <p className="hover:text-primary text-gray-700 font-semibold text-xl">Double O Bakery</p>
      </div>
      <div className="relative flex items-center">
        <span className="mr-2 text-gray-700 font-semibold capitalize">{username}</span> {/* Tampilkan username */}
        <button onClick={toggleDropdown} className="focus:outline-none">
          <img src={LogoProfile} className="w-5 h-5" alt="logo-profile" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-24 w-24 bg-gray-700 text-white rounded shadow-lg">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-1.5 hover:bg-gray-600 rounded"
            >
              <img src={LogoExit} alt="Exit Icon" className="w-6 h-6 mr-2" />
              <span>Exit</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarUp;
