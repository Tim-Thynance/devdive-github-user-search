import { useContext } from "react";
import "./Stats.css";
import { UserDetailContext } from "../context/UserDetailContext";
import './HeroSection.css'

function Stats() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="stats">
      <div>
        <p>Repos</p>
        <h2>{userDetail?.public_repos}</h2>
      </div>
      <div>
        <p>Following</p>
        <h2>{userDetail?.following}</h2>
      </div>
      <div>
        <p>Followers</p>
        <h2>{userDetail?.followers}</h2>
      </div>
    </div>
  );
}
export default Stats;
