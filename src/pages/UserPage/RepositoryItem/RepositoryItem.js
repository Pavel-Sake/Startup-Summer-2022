import React from "react";

import "./RepositoryItem.css";


const RepositoryItem = ({ repositoryData }) => {
  return (
    <li className="repoItem" >
      <a
        className="repoName"
        href={repositoryData.html_url}
        target="_blank"
        rel="noreferrer"
      >
        {repositoryData.name}
      </a>
      <div className="repoExp">{repositoryData.description}</div>
    </li>
  );
};


export { RepositoryItem };