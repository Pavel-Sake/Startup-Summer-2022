import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { SearchFrom } from "../SearchFrom/SearchFrom";

import LogoIcon from "./../../assets/logo-icon.svg";
import  './Header.css';


const Header = () => {

    const {username} = useParams();
    let initial = "";

    if (username) {
        initial = username;
    }

    const [initialValue, setInitialValue] = useState(initial);

    const handleChangeInput = (value) => {
        setInitialValue(value);
    };

    return (
        <header className="header">
            <Link to="/">
                <img
                    className="logoIcon"
                    src={LogoIcon}
                    alt="logo"
                    onClick={() => {handleChangeInput("")} }
                />
            </Link>
            <SearchFrom
                initialValue={initialValue}
                setInitialValue={setInitialValue}
            />
        </header>
    );
};


export { Header };