/* eslint-disable react/prop-types */
import React from "react";

const User = ({ user }) => {
  const {
    login,
    avatar_url,
    followers,
    following,
    public_repos,
  } = user;
  return (
    <div className="mt-7">
      <div className="flex flex-col gap-2">
        <img
          className="w-[300px] h-[300px] rounded-full"
          src={avatar_url}
          alt="User Profile"
        />
        <a href={`https://github.com/${login}`}>{login}</a>
        <span>Followers: {followers}</span>
        <span>Following: {following}</span>
        <span>Repositories: {public_repos}</span>
      </div>
    </div>
  );
};

export default User;
