import { useEffect, useState } from "react";
import "../App.css";
import moon from '../assets/moon.svg'
import sun from '../assets/icons8-sun.svg'
function Nav() {
    
    
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
