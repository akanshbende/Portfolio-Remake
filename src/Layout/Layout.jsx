import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import SocialLinks from "../Components/SocialLinks/SocialLinks";
// import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

function Layout() {
  return (
    <>
      <div className="flex align-middle justify-center flex-col relative">
        <Sidebar />
        <SocialLinks />
        <Outlet />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
