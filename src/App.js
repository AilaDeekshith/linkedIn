import React, { useState } from "react";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import { Login } from "./Components/Login";
import Person from './Components/Person';
import { Network} from "./Components/Network";
import { Jobs } from "./Components/Jobs";
import { Notifications } from "./Components/Notifications";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Components/RootLayout";
import { Messages } from "./Components/Messages";

const router = createBrowserRouter([
  {path:'/',element:<Login/>},
  {path:'/',element:<RootLayout/>,
    children:[
      {path:'home/',element:<Layout/>},
      {path:'network/',element:<Network/>},
      {path:'jobs/',element:<Jobs/>},
      {path:'messages/',element:<Messages/>},
      {path:'notifications/',element:<Notifications/>},
      {path:'in/person/',element:<Person/>},
    ]
  },

])



function App() {

  // const [auth,setAuth] = useState(false);

  // function handleAuth(){
  //   setAuth((pre)=>!pre);
  // }

  return (
    <div>
      <RouterProvider router={router}/>
      {/* <Header/>
      <Notifications/> */}
      {/* <Jobs/> */}
      {/* <Network/> */}
      {/* <Person/>  */}
      {/* {!auth && <Login auth={handleAuth}/>}
      {auth && <div><Header/>
      <Layout/></div>} */}
    </div>
  );
}

export default App;