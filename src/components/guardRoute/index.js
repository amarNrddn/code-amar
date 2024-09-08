import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import NavMobile from "../Navbar/NavMobile";
const GuardRoute = () => {
   return (
      <>
         <NavMobile />
         <div className="px-2">
            <Outlet />
         </div>
      </>
   )
}

export default GuardRoute