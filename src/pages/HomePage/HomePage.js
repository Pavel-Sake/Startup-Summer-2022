import React from "react";

import { IconWithLabel } from "../../components/IconWithLabel/IconWithLabel";
import SearchIcon from "../../assets/search-icon.svg";

const HomePage = () => {
  return (
    <IconWithLabel
      icon={SearchIcon}
      alt="icon-search"
      label="Start with searching a GitHub user"
    />
  );
};


export { HomePage };