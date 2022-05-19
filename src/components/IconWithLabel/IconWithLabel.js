import React from "react";

import "./IconWithLabel.css";

const IconWithLabel = ({icon, alt, value}) => {

    //result

    // class content

    return (
        <div className="iconWithLabel">
            <img
                className="iconWithLabel_icon"
                src={icon}
                alt={alt}
            />
            <div className="iconWithLabel_startResult">
                {value}
            </div>
        </div>
    );
};

export { IconWithLabel };