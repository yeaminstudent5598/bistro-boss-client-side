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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "../Component/Home/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Layout/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./PrivateRoute/AdminrRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";






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
        element: <Register/>,
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        //user route
        {
          path: 'cart',
          element: <Cart/>
        },
        //admin route
        {
          path:'allUsers',
          element: <AdminRoute><AllUsers/></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems/></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <ManageItems/>
        }
      ]
    },
  ]);


export default router;