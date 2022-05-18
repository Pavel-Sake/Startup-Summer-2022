import React from "react";


import { SearchFrom } from "../SearchFrom/SearchFrom";

import  './Header.css';
import LogoIcon from "./../../assets/logo-icon.svg";
import { Link } from "react-router-dom";


const Header = ({onChangeUsername}) => {

    // стереть value  в input
    return (
        <header className="header">

            <Link to="/">
                <img
                    className="logoIcon"
                    src={LogoIcon}
                    alt="logo"
                />
            </Link>

            <SearchFrom
                changeUserValue={onChangeUsername}
            />

        </header>
    );
};

export { Header };