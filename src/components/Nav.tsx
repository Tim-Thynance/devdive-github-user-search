import { useEffect, useState } from "react";
import "../App.css";
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
    const lightIcon =<i className="fas fa-sun"></i>
    const darkIcon = <i className="fas fa-moon"></i>;

    
  return (
    <div className="nav section" id="nav">
      <h1>devfinder</h1>
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
