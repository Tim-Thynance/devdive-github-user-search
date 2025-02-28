import './Social.css';
import './HeroSection.css'
import url from '../assets/002-url.svg';
import building from '../assets/001-office-building.svg';

function Social({ user }: { user: any }) {
   
    return(
        <div className="socials">
            <div>
              <p>
                <i className="fa fa-location"></i> {user?.location}
              </p>
              <a href="x.com">
                <i className="fa fa-twitter"></i> {user?.twitter_username}
              </a>
            </div>
            <div className="g-link">
              <div>
            <img src={url} alt="github link" /
            >
            <a href="{user?.html_url}">{user?.html_url}
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