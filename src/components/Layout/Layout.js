import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";

import  "./Layout.css";

const Layout = ({onChangeUsername}) => {

    return (
        <div className="layout">
            <Header onChangeUsername={onChangeUsername}/>

            <Outlet/>
        </div>
    );
};

export { Layout };