import { useContext } from "react";
import dateFormat from "./DateFormat";
import "./HeroSection.css";
import Stats from "./Stats";
import Social from "./Social";
import GithubDataFetch from "../lib/GitSearch";

interface User {
    avatar_url: string;
    login: string;
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;

}

interface UserCardProp {
    user: User;
    
}

const HeroSection = ( { user }:UserCardProp) =>{

    return (
        <div className="section">
            <div className="hero">
                <div className="pic">
                    <img
                        src={user?.avatar_url}
                        alt="avatar_url"
                        className="p-pic"
                    />
                </div>
                <div>
                    <div className="details">
                        <div className="p-details">
                            <h2>{user.name}</h2>
                            <p>{dateFormat(user?.created_at)}</p>
                        </div>
                        <div className="username">
                            <p>{user?.login}</p>
                        </div>
                        <p className="info">{user?.bio}</p>
                    </div>
                    {/* ===stats section========== */}
                    <div className="stat-container"><Stats user={user} /></div>
                    <div className="social-container"><Social user={user} /></div>
                </div>

            </div>

        </div>
    
    );
}
export default HeroSection;
