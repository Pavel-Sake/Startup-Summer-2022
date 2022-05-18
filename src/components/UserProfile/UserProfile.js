import React from "react";

import "./UserProfile.css";
// import followersIcon from "../../assets/followers-icon.svg";
// import followingIcon from "../../assets/following-icon.svg";

const UserProfile = ({userData, iconsFollow}) => {

    return (
        <div className="userCard">

            <img className="userIcon" src={userData.avatar_url}/>

            <div className="userName">{userData.name}</div>
            <a
                href={userData.html_url}
                rel="noreferrer"
                target="_blank"
                className="userNickName"
            >{userData.login}
            </a>

            <div className="followBlock">
                <div className="followers follow">
                    <img className="followIcon" src={iconsFollow.followersIcon}/>
                    {userData.followers} followers
                </div>
                <div className="follow">
                    <img className="followIcon" src={iconsFollow.followingIcon}/>
                    {userData.following} following
                </div>
            </div>

        </div>
    );
};


export { UserProfile };