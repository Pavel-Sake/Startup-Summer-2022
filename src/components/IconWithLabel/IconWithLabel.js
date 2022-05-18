import React from "react";

import "./IconWithLabel.css";

const IconWithLabel = ({icon, alt, value}) => {

    //result

    // class content

    return (
        <div className="main_block">
            <img
                className="main_icon"
                src={icon}
                alt={alt}
            />
            <div className="main_startResult">
                {value}
            </div>
        </div>
    );
};

export { IconWithLabel };