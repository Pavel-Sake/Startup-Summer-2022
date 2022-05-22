import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

import "./MainLayout.css";


const MainLayout = () => {
  return (
    <div className="layout">
      <Header/>
      <Outlet/>
    </div>
  );
};


export { MainLayout };