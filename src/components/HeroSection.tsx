import dateFormat from "./DateFormat";
import "./HeroSection.css";

interface User {
    avatar_url: string;
    login: string;
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    location: string | null;
    twitter_username: string | null;
    blog: string | null;
    company: string | null;
    html_url: string;
}

interface UserCardProp {
    user: User;
}

const HeroSection = ({ user }: UserCardProp) => {
    return (
        <header className="section header">
            {/* <!-- ===HERO SECTION==== --> */}
            <div className="hero">
                <div className="pic">
                    <img src={user?.avatar_url} alt="avatar_url" className="p-pic" />
                </div>
            </div>
            <div className="others">
                <div className="details">
                    <div className="p-details">
                        <h2>{user?.name}</h2>
                        <p>{user?.login}</p>
                    </div>
                    <p>joined {dateFormat(user?.created_at)}</p>
                </div>
                <div className="bio">
                    <p>{user?.bio}</p>
                </div>
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

                <div className="socials">
                    <div className="social-c">
                        <div className="user-link">
                            <p>
                                <i className="fa-solid fa-location-dot"></i> {user?.location}
                            </p>
                            <div>
                                <i className="fa-solid fa-link"></i>
                                <a href={`https://github.com/${user?.login}`} target="_blank" rel="noopener noreferrer">{user?.login}</a>
                            </div>
                        </div>
                        <div className="g-link">
                            <a href={`https://x.com/${user?.twitter_username}`} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i> {user?.twitter_username}
                            </a>

                            <div>
                                <i className="fa-solid fa-city"></i><span >@gitblog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
