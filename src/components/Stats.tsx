import { useContext } from "react";
import "./Stats.css";
import { UserDetailContext } from "../context/UserDetailContext";
import './HeroSection.css'

function Stats() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="stats">
      <div>
        <h4>Repos</h4>
        <h2>{userDetail?.public_repos}</h2>
      </div>
      <div>
        <h4>Following</h4>
        <h2>{userDetail?.following}</h2>
      </div>
      <div>
        <h4>Followers</h4>
        <h2>{userDetail?.followers}</h2>
      </div>
    </div>
  );
}
export default Stats;
