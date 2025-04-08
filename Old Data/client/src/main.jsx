import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Signup from "./Signup/Signup";
import Home from "./Home/Home";
const router=createBrowserRouter(
  [
    {
      path:'/',
      element: <App />,
      children:[
        {
          path:"/",
          element:<Home/> 
        }
        ,
{
  path:"signup",
  element:<Signup/>
}
      ]
    }
  ]
)


import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
);
