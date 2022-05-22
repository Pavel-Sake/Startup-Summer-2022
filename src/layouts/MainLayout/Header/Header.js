import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { SearchFrom } from "../SearchFrom/SearchFrom";

import LogoIcon from "../../../assets/logo-icon.svg";
import './Header.css';


const Header = () => {
  const { username: usernameFromParams = "" } = useParams();

  const [searchUsername, setSearchUsername] = useState(usernameFromParams);

  const handleChangeInput = (value) => {
    setSearchUsername(value);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="logoIcon"
          src={LogoIcon}
          alt="logo"
          onClick={() => {
            handleChangeInput("");
          }}
        />
      </Link>
      <SearchFrom
        initialUsername={searchUsername}
        onChangeUsername={handleChangeInput}
      />
    </header>
  );
};


export { Header };