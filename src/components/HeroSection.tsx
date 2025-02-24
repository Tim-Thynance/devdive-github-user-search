import { useContext } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import dateFormat from "./DateFormat";
import "./HeroSection.css";
import Stats from "./Stats";
import Social from "./Social";

function HeroSection() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    return (
        <div className="section">
            <div className="hero">
                <div className="pic">
                    <img
                        src={userDetail?.avatar_url}
                        alt="avatar_url"
                        className="p-pic"
                    />
                </div>
                <div>
                    <div className="details">
                        <div className="p-details">
                            <h2>{userDetail?.name}</h2>
                            <p>{dateFormat(userDetail?.created_at)}</p>
                        </div>
                        <div className="username">
                            <p>{userDetail?.login}</p>
                        </div>
                        <p className="info">{userDetail?.bio}</p>
                    </div>
                    {/* ===stats section========== */}
                    <div className="stat-container"><Stats /></div>
                    <div className="social-container"><Social /></div>
                </div>
            </div>
        </div>
    
    );
}
export default HeroSection;
