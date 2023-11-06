import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex">
      <Sidebar />
        <div className="h-screen flex-1 p-7">
        <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
