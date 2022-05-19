import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cn from 'classnames';

import { NotFound } from "../../NotFound/NotFound";
import Repositories from "../../Repositories";
import UserProfile from "../../UserProfile";
import { Loader } from "../../Loader/Loader";
import { getResource } from "../../../API/resource";

import iconUsers from "../../../assets/Union.svg";
import followersIcon from "../../../assets/followers-icon.svg";
import followingIcon from "../../../assets/following-icon.svg";
import "./UserPage.css";




const UserPage = () => {

    const {username} = useParams();
    const [userData, setUserData] = useState(
        {
            userInfo: null,
            loading: true,
            isUserExist: null
    });

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
                setUserData(() => {
                    return {
                            userInfo: data,
                            loading: false,
                            isUserExist: res.ok
                    };
                });
            });
    }, [username])


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
                    />
                </div>
            }
        </>
    );
};


export { UserPage };