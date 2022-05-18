import React, {useState} from "react";

import "./SearchFrom.css";
import iconSearch from "../../assets/search-icon.svg";
import { useNavigate, useParams } from "react-router-dom";


const SearchFrom = ({changeUserValue}) => {

    let navigate = useNavigate();
    const {username} = useParams();


    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;


        // changeUserValue(searchValue);

        if (event.target.search.value) {
            return navigate(`user/${searchValue}`);
        } else {
            return navigate("/");
        }
    };


    return (
        <form className="searchBlock"
              onSubmit={handleSubmit}
        >
            <img
                className="iconSearch"
                src={iconSearch}
                alt="search"
            />
            <input
                className="input"
                type="text"
                name="search"
                placeholder="Enter GitHab username"
                defaultValue={username}
            />
        </form>
    );
};


export { SearchFrom };