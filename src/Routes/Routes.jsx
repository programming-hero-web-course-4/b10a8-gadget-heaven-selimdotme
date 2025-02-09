import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home";
import GadgetDetails from "../Components/GadgetDetails";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Categoryes from "../Components/Categoryes";
import HomeTower from "../Pages/HomeTower";

import LoginPage from "../Components/LogInPage";
import Page404 from "../Components/Page404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:category",
        element: <HomeTower></HomeTower>,
        loader: () => fetch("/Gadgets.json"),
      },
      {
        path: "/gadget/:productId",
        element: <GadgetDetails />,
        loader: () => fetch("/Gadgets.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/Gadgets.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/categories",
        element: <Categoryes></Categoryes>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);


  export default router




 