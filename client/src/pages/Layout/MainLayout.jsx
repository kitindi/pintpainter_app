import React from "react";
import "./MainLayout.css";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/Topbar/Topbar";

import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="app">
        <Leftbar />
        <div className="content">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
