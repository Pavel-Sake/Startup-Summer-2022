import React, { useEffect, useState, useContext } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import cn from 'classnames';


import { IconWithLabel } from "../../IconWithLabel/IconWithLabel";
import iconUsers from "../../../assets/Union.svg";
import iconRepository from "../../../assets/Repository.svg";

import { ValueContext } from "../../../App";

import { NotFound } from "../../NotFound/NotFound";
import Repositories from "../../Repositories";
import UserProfile from "../../UserProfile";


import "./UserPage.css";
import followersIcon from "../../../assets/followers-icon.svg";
import followingIcon from "../../../assets/following-icon.svg";
import { Loader } from "../../Loader/Loader";


import { getResource } from "../../../API/resource";




const UserPage = () => {

    // let inputValue = useContext(ValueContext);
    const {username} = useParams();


    const [userData, setUserData] = useState(
        {
            userInfo: null,
            loading: true,
            isUserExist: null
    });

    // const [searchParams, setSearchParams] = useSearchParams()


    const iconsFollow = {
        followersIcon,
        followingIcon
    };


    useEffect(() => {

        const getUser = getResource;

        setUserData((state) => {
            return {
                ...state,
                loading: true,
            }
        });

        getUser(`https://api.github.com/users/${username}`)
            .then(({data, res}) => {
                // console.log("repo", data);
                setUserData(() => {
                    return {
                            userInfo: data,
                            loading: false,
                            isUserExist: res.ok
                    };
                });
            });



        // getRepositories(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=2`) //list item per_page   ?page=1
        //     .then(({data, res}) => {
        //         console.log("repo", data)
        //
        //         setUserData((state) => {
        //             return {
        //                 ...state,
        //                 repo: {repoData: data, loading: false}
        //             };
        //         });
        //
        //     });

        // const pageQuery = searchParams.get("page") || ""


        // if (userQuery !== queryValue) {
        //
        //
        //     setSearchParams({userName: queryValue})
        // }
        // else
        //
        // if (pageQuery) {
        //     setSearchParams({userName: queryValue, page: pageQuery})
        // } else {
        //     setSearchParams({userName: queryValue})
        // }

    }, [username]);


    const { userInfo, loading, isUserExist } = userData;


    if (loading) {
        return (<Loader/>);
    }


    return (
        <>
            {!isUserExist
                ?
                <NotFound
                    icon={iconUsers}
                    alt="icon-user"
                    value="User not found"
                />
                :
                <div className={cn("UserProfile", {gray: true})}>
                    <UserProfile
                        userData={userInfo}
                        iconsFollow={iconsFollow}
                    />
                    <Repositories
                        publicRepos={userInfo.public_repos}
                        username={username}

                        // repositoriesData={repo.repoData}
                        // loading={repo.loading}
                    />
                </div>


            }
        </>

    );
};

export { UserPage };