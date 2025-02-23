import { useState } from 'react'
import { UserDetailContext } from "./context/UserDetailContext";
import "./index.css";
import './App.css'


function App() {
  const [userDetail, setUserDetail] = useState<any>(null);


  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
     
  </UserDetailContext.Provider>
  )
}

export default App
