import { useContext } from "react";
import "./Stats.css";
import './HeroSection.css'

import { FC } from "react";

interface User {
  public_repos: number;
  following: number;
  followers: number;
}

const Stats: FC<{ user: User }> = ({ user }) => {
  return (
    <div className="stats">
      <div>
        <p>Repos</p>
        <h2>{user?.public_repos}</h2>
      </div>
      <div>
        <p>Following</p>
        <h2>{user?.following}</h2>
      </div>
      <div>
        <p>Followers</p>
        <h2>{user?.followers}</h2>
      </div>
    </div>
  );
}
export default Stats;
