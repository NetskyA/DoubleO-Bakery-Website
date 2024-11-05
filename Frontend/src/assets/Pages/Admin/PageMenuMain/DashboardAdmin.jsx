import React from "react";
import { useSelector } from "react-redux"; // Import useSelector untuk mengambil username dari Redux store
import Navbarside from "../Component/Navbarside";
import NavbarUp from "../Component/NavbarUp";
import Footer from "../Component/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function DashboardAdmin() {
  const location = useLocation();
  const username = useSelector((state) => state.user.username); // Ambil username dari Redux store

  // Mendapatkan jam sekarang dan menentukan pesan sambutan
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour < 12) {
    greeting = "Selamat pagi";
  } else if (currentHour < 18) {
    greeting = "Selamat siang";
  } else {
    greeting = "Selamat malam";
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Navbar at the top */}
      <div className="fixed w-full z-10">
        <NavbarUp />
      </div>

      {/* Sidebar and main content area */}
      <div className="flex">
        {/* Scrollable Sidebar */}
        <div className="navbarside w-48 bg-white shadow-xl fixed h-screen overflow-y-auto">
          <Navbarside />
        </div>

        {/* Main Content Area */}
        <div className="outlet ml-48 mt-10 bg-white overflow-y-auto w-full">
          {location.pathname === "/dashboard/admin" ? ( // Cek apakah ini halaman dashboard utama
            <div className="text-2xl font-bold text-center mt-10">
              {greeting}, {username} {/* Tampilkan greeting dengan username */}
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
