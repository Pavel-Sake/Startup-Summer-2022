import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { useSearchParams } from "react-router-dom";

import { getResource } from "../../API/resource";

import { Loader } from "../Loader/Loader";
import { IconWithLabel } from "../IconWithLabel/IconWithLabel";

import "./Repositiries.css";
import iconRepository from "../../assets/Repository.svg";
import RepositoryItem from "../RepositoryItem";
import PaginationBlock from "../PaginationBlock";


const perPage = 4;

const Repositories = ({publicRepos, username}) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const pageQuery = searchParams.get("page") || "";

    let currentInitialPage = 1;

    if (pageQuery) {
        currentInitialPage = pageQuery;
    }


    const [repositoryData, setRepositoryData] = useState(
        {
            repositoryInfo: [],
            loading: true,
            isRepositoryExist: null
        });
    const [currentPage, setCurrentPage] = useState(currentInitialPage);


    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    };


    useEffect(() => {

        const getRepositories = getResource;

        setRepositoryData((state) => {
            return {
                ...state,
                repositoryInfo: [],
                loading: true,
            };
        });

        getRepositories(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${currentPage}`)
            .then(({data, res}) => {

                setRepositoryData(
                    {
                        repositoryInfo: data,
                        loading: false,
                        isRepositoryExist: res.ok
                    }
                );

                data.length === 0 ? setSearchParams({page: null}) : setSearchParams({page: currentPage});
            });

    }, [username, currentPage]);

    const {repositoryInfo, loading, isRepositoryExist} = repositoryData;

    const shift = 1;
    const prevPage = currentPage - 1;
    const numberOfPrevItems = perPage * prevPage;
    const showRepoStart = numberOfPrevItems + shift;
    const showRepoFinish = (showRepoStart + repositoryInfo.length) - shift;

    if (!isRepositoryExist) {
        return null;
    }

    if (loading) {
        return (<Loader/>);
    }

    if (repositoryInfo.length === 0) {
        return (<IconWithLabel
            icon={iconRepository}
            alt="icon-repository"
            value="Repository list is empty"
        />);
    }


    return (
        <div className="repoBlock">
            <div className="repoText">Repositories({publicRepos})</div>
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
                publicRepos={publicRepos}
                changeCurrentPage={changeCurrentPage}
                currentPage={currentPage}
                repoInPage={perPage}
                showRepoStart={showRepoStart}
                showRepoFinish={showRepoFinish}
            />
        </div>
    );
};


export { Repositories };