import React, { useState, useRef, useEffect } from "react";
import LogoMaster from "../../../Image/icon/logo-master.svg";
import LogoReport from "../../../Image/icon/logo-report.svg";
import { Link, useLocation } from "react-router-dom";

const Navbarside = () => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isLaporanOpen, setIsLaporanOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const location = useLocation();
  const masterRef = useRef(null);
  const laporanRef = useRef(null);

  const toggleMasterMenu = () => {
    setIsMasterOpen(!isMasterOpen);
    setActiveMenu("Master");
    if (isLaporanOpen) {
      setIsLaporanOpen(false);
    }
  };

  const toggleLaporanMenu = () => {
    setIsLaporanOpen(!isLaporanOpen);
    setActiveMenu("Laporan");
    if (isMasterOpen) {
      setIsMasterOpen(false);
    }
  };

  const handleSubMenuClick = (menu) => {
    setActiveSubMenu(menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        masterRef.current &&
        !masterRef.current.contains(event.target) &&
        laporanRef.current &&
        !laporanRef.current.contains(event.target)
      ) {
        setIsMasterOpen(false);
        setIsLaporanOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-48" style={{ fontFamily: "sans-serif" }}>
      <ul>
        {/* Menu Master */}
        <li className="mt-16 m-2" ref={masterRef}>
          <div className="group">
            <button
              onClick={toggleMasterMenu}
              className={`w-full flex items-center px-2 py-1.5 text-sm font-normal rounded-md text-left text-black hover:text-black ${
                activeMenu === "Master" ? "bg-slate-100 hover:bg-blue-100" : "hover:bg-slate-200"
              }`}
            >
              <img
                src={LogoMaster}
                alt="LogoMaster"
                className="h-5 filter items-center justify-center grayscale group-hover:filter-none"
              />
              <span className="ml-2 text-base font-medium">Master</span>
            </button>
          </div>
          {isMasterOpen && (
            <ul className="text-xs mt-1 pl-8 relative">
              {/* Garis vertikal dengan posisi dinamis */}
              <div
                className={`absolute rounded-xl h-full bg-gray-400 left-6 w-0.5 transition-all duration-300 ${
                  activeSubMenu.includes("master") ? "bg-gray-200" : "bg-gray-300"
                }`}
                style={{
                  top:
                    activeSubMenu === "master_produk"
                      ? "0.25rem"
                      : activeSubMenu === "master_promo"
                      ? "2.5rem"
                      : activeSubMenu === "master_event"
                      ? "5rem"
                      : "7.5rem",
                  height: "2rem",
                }}
              ></div>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/master/produk"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/master/produk" ? "bg-slate-100 shadow-md" : "hover:bg-blue-100 "
                  }`}
                  onClick={() => handleSubMenuClick("master_produk")}
                >
                  Master Produk
                </Link>
              </li>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/master/promo"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/master/promo" ? "bg-slate-100 shadow-lg" : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleSubMenuClick("master_promo")}
                >
                  Master Promo
                </Link>
              </li>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/master/event"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/master/event" ? "bg-slate-100 shadow-lg" : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleSubMenuClick("master_event")}
                >
                  Master Event
                </Link>
              </li>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/master/user"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/master/user" ? "bg-slate-100 shadow-lg" : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleSubMenuClick("master_user")}
                >
                  Master User
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Menu Laporan */}
        <li className="mt-2 m-2" ref={laporanRef}>
          <div className="group">
            <button
              onClick={toggleLaporanMenu}
              className={`w-full flex items-center px-2 py-1.5 text-sm font-normal rounded-md text-left text-black hover:text-black ${
                activeMenu === "Laporan" ? "bg-slate-100 hover:bg-blue-100" : "hover:bg-slate-200"
              }`}
            >
              <img
                src={LogoReport}
                alt="LogoReport"
                className="h-5 filter items-center justify-center grayscale group-hover:filter-none"
              />
              <span className="ml-2 text-base font-medium">Laporan</span>
            </button>
          </div>
          {isLaporanOpen && (
            <ul className="text-xs mt-1 pl-8 relative">
              <div
                className={`absolute rounded-xl bg-gray-400 left-6 w-0.5 transition-all duration-300 ${
                  activeSubMenu.includes("laporan") ? "bg-blue-500" : "bg-gray-300"
                }`}
                style={{
                  top:
                    activeSubMenu === "laporan_produk"
                      ? "0.25rem"
                      : activeSubMenu === "laporan_promo"
                      ? "2.5rem"
                      : activeSubMenu === "laporan_event"
                      ? "5rem"
                      : "7.5rem",
                  height: "2rem",
                }}
              ></div>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/laporan/produk"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/laporan/produk" ? "bg-slate-100 shadow-lg" : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleSubMenuClick("laporan_produk")}
                >
                  Laporan Produk
                </Link>
              </li>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/laporan/promo"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/laporan/promo" ? "bg-slate-100 shadow-lg" : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleSubMenuClick("laporan_promo")}
                >
                  Laporan Promo
                </Link>
              </li>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/laporan/event"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/laporan/event" ? "bg-slate-100 shadow-lg" : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleSubMenuClick("laporan_event")}
                >
                  Laporan Event
                </Link>
              </li>
              <li className="m-1">
                <Link
                  to="/dashboard/admin/laporan/user"
                  className={`block px-4 py-2 text-sm text-gray-700 rounded-md ${
                    location.pathname === "/dashboard/admin/laporan/user" ? "bg-slate-100 shadow-lg" : "hover:bg-blue-100"
                  }`}
                  onClick={() => handleSubMenuClick("laporan_user")}
                >
                  Laporan User
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbarside;
