import React, { useEffect, useState } from "react";

import SearchIcon from "../../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";

import "./SearchFrom.css";


const SearchFrom = ({ initialUsername = "", onChangeUsername }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState(initialUsername);

  useEffect(() => {
    setUsername(initialUsername);
  }, [initialUsername]);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value || "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usernameFromForm = event.target.username.value || "";

    onChangeUsername(usernameFromForm);

    if (usernameFromForm) {
      return navigate(`user/${usernameFromForm}`);
    } else {
      return navigate("/");
    }
  };

  return (
    <form
      className="searchForm"
      onSubmit={handleSubmit}
    >
      <img
        className="searchIcon"
        src={SearchIcon}
        alt="search"
      />
      <input
        className="usernameInput"
        onChange={handleChangeUsername}
        type="text"
        name="username"
        placeholder="Enter GitHab username"
        value={username}
      />
    </form>
  );
};


export { SearchFrom };