import React, { useState } from "react";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import { Login } from "./Components/Login";
import Person from './Components/Person'

function App() {

  const [auth,setAuth] = useState(false);

  function handleAuth(){
    setAuth((pre)=>!pre);
  }

  return (
    <div>
      <Header/>
      {/* <Person/> */}
      {!auth &&<Login auth={handleAuth}/>}
      {auth && <div><Header/>
      <Layout/></div>}
    </div>
  );
}

export default App;