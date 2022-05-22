import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Loader } from "../../../components/Loader/Loader";
import { IconWithLabel } from "../../../components/IconWithLabel/IconWithLabel";
import PaginationBlock from "../../../components/PaginationBlock";

import { fetchResource } from "../../../API/resource";
import { ITEM_PER_PAGE_NUMBER, API_GITHUB_BASE } from "../../../constants";


import RepositoryIcon from "../../../assets/Repository.svg";
import RepositoryItem from "../RepositoryItem";
import "./Repositiries.css";


const Repositories = ({ publicReposNumber, username }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPageNumber = searchParams.get("page") || 1;

  const [repositoryInfo, setRepositoryInfo] = useState([]);
  const [isRepositoryLoading, setIsRepositoryLoading] = useState(true);
  const [isRepositoryExist, setIsRepositoryExist] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(initialPageNumber);
  
  const handleChangeCurrentPage = (page) => {
    setCurrentPage(page);
  };
  
  useEffect(() => {
    const fetchRepositories = fetchResource;

    setRepositoryInfo([]);
    setIsRepositoryLoading(true);

    fetchRepositories(`${API_GITHUB_BASE}${username}/repos?per_page=${ITEM_PER_PAGE_NUMBER}&page=${currentPage}`)
      .then(({ data, res }) => {
        setRepositoryInfo(data);
        setIsRepositoryLoading(false);
        setIsRepositoryExist(res.ok);

        if (data.length === 0) {
          setSearchParams({ page: null });
        } else {
          setSearchParams({ page: currentPage });
        }
      });
  }, [username, currentPage]);

  if (!isRepositoryExist) {
    return null;
  }

  if (isRepositoryLoading) {
    return (<Loader/>);
  }

  if (repositoryInfo.length === 0) {
    return (
      <IconWithLabel
        icon={RepositoryIcon}
        alt="icon-repository"
        label="Repository list is empty"
      />);
  }

  return (
    <div className="repoBlock">
      <div className="repoLabel">
        Repositories({publicReposNumber})
      </div>
      <ul className="repoList">
        {repositoryInfo.map((repository) => {
          return (
            <RepositoryItem
              key={repository.id}
              repositoryData={repository}
            />
          );
        })}
      </ul>
      <PaginationBlock
        totalItemsNumber={publicReposNumber}
        onChangeCurrentPage={handleChangeCurrentPage}
        currentPage={currentPage}
        itemsCountsOnPage={repositoryInfo.length}
      />
    </div>
  );
};


export { Repositories };