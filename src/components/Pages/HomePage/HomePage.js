import React from "react";

import { IconWithLabel } from "../../IconWithLabel/IconWithLabel";
import iconSearch from "../../../assets/search-icon.svg";

const HomePage = () => {

    return (
        <IconWithLabel
            icon={iconSearch}
            alt="icon-search"
            value="Start with  searching a GitHub user"
        />
    );
};

export { HomePage };