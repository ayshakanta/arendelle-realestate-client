import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllProperties from "../pages/AllProperties/AllProperties";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import Dashboard from "../Layout/Dashboard";
import AddProperty from "../pages/Agent/AddProperty";
import MyAddedProperties from "../pages/Agent/MyAddedProperties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allProperties",
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addProperty",
        element: <AddProperty></AddProperty>,
      },
      {
        path: "addedProperties",
        element: <MyAddedProperties></MyAddedProperties>,
      },
    ],
  },
]);
