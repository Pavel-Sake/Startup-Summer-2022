import React, { useEffect, useState } from "react";

import iconSearch from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";

import "./SearchFrom.css";


const SearchFrom = ({initialValue, setInitialValue}) => {

    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState(initialValue);


    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    const handleChangeInputValue = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;

        setInitialValue(searchValue);

        if (searchValue) {
            return navigate(`/${searchValue}`);
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
                onChange={handleChangeInputValue}
                type="text"
                name="search"
                placeholder="Enter GitHab username"
                value={inputValue}
            />
        </form>
    );
};


export { SearchFrom };