import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cn from 'classnames';

import { NotFound } from "../../components/NotFound/NotFound";
import Repositories from "./Repositories";
import UserProfile from "./UserProfile";
import { Loader } from "../../components/Loader/Loader";

import { fetchResource } from "../../API/resource";
import { API_GITHUB_BASE } from "../../constants";

import UserIcon from "../../assets/Union.svg";
import "./UserPage.css";


const UserPage = () => {
  const { username } = useParams();

  const [userInfo, setUserInfo] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [isUserExist, setIsUserExist] = useState(null);

  useEffect(() => {
    const fetchUser = fetchResource;

    setIsUserLoading(true);

    fetchUser(`${API_GITHUB_BASE}${username}`)
      .then(({ data, res }) => {
        setUserInfo(data);
        setIsUserLoading(false);
        setIsUserExist(res.ok);
      });
  }, [username]);


  if (isUserLoading) {
    return (<Loader/>);
  }

  return (
    <>
      {!isUserExist
        ?
        <NotFound
          icon={UserIcon}
          alt="icon-user"
          value="User not found"
        />
        :
        <div className={cn("UserProfile", { gray: true })}>
          <UserProfile
            userInfo={userInfo}
          />
          <Repositories
            publicReposNumber={userInfo.public_repos}
            username={username}
          />
        </div>
      }
    </>
  );
};


export { UserPage };