import { useContext } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import "./HeroSection.css";

function Hero() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="section">
      <div className="hero">
        <div className="pic">
          <img
            src={userDetail?.avatar_url}
            alt="profile-pic"
            className="p-pic"
          />
        </div>
        <div>
          <div className="p-details">
            <h2>{userDetail?.name}</h2>
            <p>Joined 25 Jan 2020</p>
          </div>
          <div className="username">
            <p>{userDetail?.login}</p>
          </div>
          <p className="info">{userDetail?.bio}</p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
