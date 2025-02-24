import { useContext } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import './Social.css';
import './HeroSection.css'
import url from '../assets/002-url.svg';
import building from '../assets/001-office-building.svg';

function Social(){
   const {userDetail, setUserDetail } = useContext(UserDetailContext);
   
    return(
        <div className="socials">
            <div>
              <p>
                <i className="fa fa-location"></i> {userDetail?.location}
              </p>
              <a href="x.com">
                <i className="fa fa-twitter"></i> {userDetail?.twitter_username}
              </a>
            </div>
            <div className="g-link">
            <img src={url} alt="github link" />
              <a href="www.github.blog">{userDetail?.html_url}
              </a>
              <div>
                <img src={building} alt="building" /> @gitblog
              </div>
            </div>
          </div>
    )
}
export default Social;