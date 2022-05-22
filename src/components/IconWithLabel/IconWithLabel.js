import React from "react";

import "./IconWithLabel.css";

const IconWithLabel = ({ icon, alt, label }) => {
  return (
    <div className="iconWithLabel">
      <img
        className="iconWithLabel_icon"
        src={icon}
        alt={alt}
      />
      <div className="iconWithLabel_label">
        {label}
      </div>
    </div>
  );
};


export { IconWithLabel };