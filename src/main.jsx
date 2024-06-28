import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Provider } from 'react-redux'
import MenuPage from "./assets/Pages/Customer/Navbar.jsx"
import HomePage from "./assets/Pages/Customer/MenuPage.jsx"
import AboutPage from "./assets/Pages/Customer/AboutPage.jsx";
import RewardPage from "./assets/Pages/Customer/RewardPage.jsx";
import LocationPage from "./assets/Pages/Customer/LocationPage.jsx";
import HotlinePage from "./assets/Pages/Customer/HotlinePage.jsx";


//untuk routing pindah halaman (path harus sama dengan path di router)
const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }, {
        path: "about/page/doubleo",
        element: <AboutPage />
      }, {
        path: "reward/page/doubleo/costumer",
        element: <RewardPage />
      }, {
        path: "hotline/page/doubleo/hotline",
        element: <HotlinePage />
      }, {
        path: "order/page/doubleo/outlet",
        element: <LocationPage />
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
