import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import SocialLinks from "../Components/SocialLinks/SocialLinks";

function Layout() {
  return (
    <>
      <div className="flex align-middle justify-center flex-col">
        <Sidebar />
        <SocialLinks />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
