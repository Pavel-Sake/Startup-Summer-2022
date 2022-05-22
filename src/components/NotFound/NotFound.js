import React from "react";

import { IconWithLabel } from "../IconWithLabel/IconWithLabel";
import iconUsers from "../../assets/Union.svg";


const NotFound = () => {
  return (
    <IconWithLabel
      icon={iconUsers}
      alt="icon-user"
      label="User not found"
    />
  );
};

export { NotFound };