import React from "react";

import FollowersIcon from "../../../assets/followers-icon.svg";
import FollowingIcon from "../../../assets/following-icon.svg";
import "./UserProfile.css";


const UserProfile = ({ userInfo }) => {
  return (
    <div className="userProfile">

      <img
        className="avatarIcon"
        src={userInfo.avatar_url}
        alt="avatar"
      />

      <div
        className="userName"
      >
        {userInfo.name}
      </div>
      <a
        href={userInfo.html_url}
        rel="noreferrer"
        target="_blank"
        className="nicknameLink"
      >
        {userInfo.login}
      </a>

      <div className="followBlock">
        <div className="followers follow">
          <img
            className="followIcon"
            src={FollowersIcon}
            alt="followers"
          />
          {userInfo.followers} followers
        </div>
        <div className="follow">
          <img
            className="followIcon"
            src={FollowingIcon}
            alt="following"
          />
          {userInfo.following} following
        </div>
      </div>
    </div>
  );
};


export { UserProfile };