import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import OurMenu from "../Component/OurMenu/OurMenu";
import Order from "../Pages/Orders/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/register";






const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement:<ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
          path: '/our-menu',
          element: <OurMenu/>
        },
        {
          path: '/order/:category',
          element: <Order/>,
        },

      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
      ]
    },
  ]);


export default router;