import { useState } from 'react'
import { UserDetailContext } from "./context/UserDetailContext";
import "./index.css";
import './App.css'
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';

function App() {
  const [userDetail, setUserDetail] = useState<any>(null);


  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
        <Nav />
        <SearchBar />
        <HeroSection/>
      </div>
    </UserDetailContext.Provider>
  )
}

export default App
