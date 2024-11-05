import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import store from "./assets/Store/store.js";
import { login } from "./assets/Services/userSlice.js"; // Import action login
import "./index.css";

// Import halaman utama
import MenuPage from "./assets/Pages/Customer/Navbar.jsx";
import HomePage from "./assets/Pages/Customer/MenuPage.jsx";
import AboutPage from "./assets/Pages/Customer/AboutPage.jsx";
import RewardPage from "./assets/Pages/Customer/RewardPage.jsx";
import LocationPage from "./assets/Pages/Customer/LocationPage.jsx";
import HotlinePage from "./assets/Pages/Customer/HotlinePage.jsx";
import LoginPage from "./assets/Pages/ComponentPage/LoginPage.jsx";
import Registerpage from "./assets/Pages/ComponentPage/RegisterPage.jsx";
import Cakepage from "./assets/Pages/Customer/Product/Cake.jsx";
import Bakerypage from "./assets/Pages/Customer/Product/Bakery.jsx";
import Pastrypage from "./assets/Pages/Customer/Product/Pastry.jsx";
import Donutpage from "./assets/Pages/Customer/Product/Donut.jsx";

// Admin Pages
import LoginPageAdmin from "./assets/Pages/Admin/PageMenuMain/LoginPageAdmin.jsx";
import DashboardAdmin from "./assets/Pages/Admin/PageMenuMain/DashboardAdmin.jsx";
import ProdukPage from "./assets/Pages/Admin/PageMenuAdmin/Master/ProdukPage.jsx";
import PromoPage from "./assets/Pages/Admin/PageMenuAdmin/Master/PromoPage.jsx";
import EventPage from "./assets/Pages/Admin/PageMenuAdmin/Master/EventPage.jsx";
import UserPage from "./assets/Pages/Admin/PageMenuAdmin/Master/UserPage.jsx";
import AddProductPage from "./assets/Pages/Admin/PageMenuAdmin/Master/AddProductPage.jsx";
import EditProductPage from "./assets/Pages/Admin/PageMenuAdmin/Master/EditProductPage.jsx";

import LaporanProduk from "./assets/Pages/Admin/PageMenuAdmin/Laporan/LaporanProduk.jsx";
import LaporanPromo from "./assets/Pages/Admin/PageMenuAdmin/Laporan/LaporanPromo.jsx";
import LaporanEvent from "./assets/Pages/Admin/PageMenuAdmin/Laporan/LaporanEvent.jsx";
import LaporanUser from "./assets/Pages/Admin/PageMenuAdmin/Laporan/LaporanUser.jsx";

// Komponen Protected Route
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login/user/nsateam/admin" />;
};

// Validasi PropTypes untuk ProtectedRoute
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

// Buat router untuk routing halaman
const router = createBrowserRouter([
    {
        path: "/",
        element: <MenuPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about/page/doubleo", element: <AboutPage /> },
            { path: "reward/page/doubleo/costumer", element: <RewardPage /> },
            { path: "hotline/page/doubleo/hotline", element: <HotlinePage /> },
            { path: "order/page/doubleo/outlet", element: <LocationPage /> },
            { path: "/menu/cake", element: <Cakepage /> },
            { path: "/menu/bakery", element: <Bakerypage /> },
            { path: "/menu/pastry", element: <Pastrypage /> },
            { path: "/menu/donut", element: <Donutpage /> },
        ],
    },
    { path: "/register/user", element: <Registerpage /> },
    { path: "/login/user", element: <LoginPage /> },
    {
        path: "/login/user/nsateam/admin",
        element: <LoginPageAdmin />,
    },
    {
        path: "/dashboard/admin",
        element: (
            <ProtectedRoute>
                <DashboardAdmin />
            </ProtectedRoute>
        ),
        children: [
            { path: "master/produk", element: <ProdukPage /> },
            { path: "master/promo", element: <PromoPage /> },
            { path: "master/event", element: <EventPage /> },
            { path: "master/user", element: <UserPage /> },
            { path: "master/produk/add", element: <AddProductPage /> },
            { path: "/dashboard/admin/master/produk/edit/:id_product", element: <EditProductPage /> },
            { path: "laporan/produk", element: <LaporanProduk /> },
            { path: "laporan/promo", element: <LaporanPromo /> },
            { path: "laporan/event", element: <LaporanEvent /> },
            { path: "laporan/user", element: <LaporanUser /> },
        ],
    },
]);

// Komponen utama yang memuat logika pengecekan token dari localStorage
const MainApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Cek jika token ada di localStorage saat aplikasi dimuat
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(login.fulfilled({ token }));
        }
    }, [dispatch]);

    return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <MainApp />
    </Provider>
);
