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
              <div>
            <img src={url} alt="github link" /
            >
            <a href="{userDetail?.html_url}">{userDetail?.html_url}
              </a>
              </div>
              <div>
                <img src={building} alt="building" /> <p>@gitblog</p>
              </div>
            </div>
          </div>
    )
}
export default Social;