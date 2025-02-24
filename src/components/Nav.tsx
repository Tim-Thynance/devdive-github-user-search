import { useEffect, useState } from "react";
import "../App.css";
import moon from '../assets/moon.svg'
import sun from '../assets/icons8-sun.svg'
function Nav() {
    const [darkMode, setDarkmode] = useState<boolean>(()=>{
        return localStorage.getItem('theme')==='dark';

    });
    //apply the saved theme
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('dark-mode');    
            
        }
        else{
            document.body.classList.remove('dark-mode');    
        }
    },[darkMode]);
    const switchTheme =()=>{
        const NewTheme = !darkMode;
        setDarkmode(NewTheme);
        localStorage.setItem('theme', NewTheme ? 'dark' : 'light')
    };
    const lightIcon = <img className="icon" src={sun} alt="sun-icon" />;
    const darkIcon = <img className="icon" src={moon} alt="moon-icon" />;

    
  return (
    <div className="nav section" id="nav">
      <h2>devfinder</h2>
      <button onClick={switchTheme} className="btn">
        <span className="icons">
        {darkMode ?  'LIGHT ': 'DARK ' }
        {darkMode ? lightIcon : darkIcon}        
        </span>
      </button>
    </div>
  );
}
export default Nav;
