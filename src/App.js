import Layout from "./Components/Layout";
import { Login } from "./Components/Login";
import Person from './Components/Person';
import { Network } from "./Components/Network.jsx";
import { Jobs } from "./Components/Jobs";
import { Notifications } from "./Components/Notifications";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Components/RootLayout";
import { Messages } from "./Components/Messages";
import { SignUp } from "./Components/SignUp";
import { Experience } from "./Components/Experience";
import { PersonLayout } from "./Components/PersonLayout";
import { Education } from "./Components/Education";
import { Certifications } from "./Components/Certifications";
import { Skills } from "./Components/Skills";
import { Language } from "./Components/Language";
import { Context } from "./Components/Context";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceActions } from "./Components/store/Auth";
import { userLoader } from "./Components/Layout";
import { personDataLoader } from "./Components/Person";

const router = createBrowserRouter([
  {path:'/',element:<Login/>},
  {path:'/signup',element:<SignUp/>},
  {path:'/',element:<RootLayout/>,
    children:[
      {path:'home/',element:<Layout/>,loader:userLoader},
      {path:'network/',element:<Network/>,loader:userLoader},
      {path:'jobs/',element:<Jobs/>},
      {path:'messages/',element:<Messages/>,loader:userLoader},
      {path:'notifications/',element:<Notifications/>,loader:userLoader},
      {path:'in/:emailId',element:<PersonLayout/>,
        children:[
          {index:true, element:<Person/>,loader:personDataLoader},
          {path:'details/experience', element:<Experience/>,loader:userLoader},
          {path:'details/education', element:<Education/>,loader:userLoader},
          {path:'details/certifications', element:<Certifications/>,loader:userLoader},
          {path:'details/skills', element:<Skills/>,loader:userLoader},
          {path:'details/language', element:<Language/>,loader:userLoader}
        ]
      },
    ]
  }
])

function App() {

  const dispatch = useDispatch()

  const auth = useSelector((state) => state.Auth.isAuthenticated)
  const user = useSelector((state) => state.Auth.user)

  const [postDetails,setPostDetails] = useState([])
  const [loading,setLoading] = useState(true);
  const [jobs,setJobs] = useState([])

  async function getAllPosts(){
    const response = await fetch('http://localhost:8080/getAllPosts');
    const data = await response.json();
    setPostDetails(data);
    setLoading(false);
  }

  async function getAllJobPosts(){
    const response = await fetch('http://localhost:8080/getAllJobPosts');
    const data = await response.json();
    setJobs(data);
  }

  async function getCurrentUser(){
    if(localStorage.getItem('userEmailId') !== ''){
      const response = await fetch('http://localhost:8080/getUser/'+localStorage.getItem('userEmailId'));
      const data = await response.json();
      dispatch(AuthSliceActions.login(data));
    }
  }

  useEffect(()=>{
    getAllPosts()
    getAllJobPosts()
   getCurrentUser()
    console.log(localStorage.getItem("userEmailId"))
    // localStorage.removeItem("profile")
    console.log(localStorage.getItem("profile"))
  },[])

  const contextValue = {
    posts:postDetails,
    getPosts:getAllPosts,
    getJobs:getAllJobPosts,
    jobDetails:jobs,
    loading:loading
  }
 
  return (
      <Context.Provider value={contextValue}>
        <RouterProvider router={router}/>
      </Context.Provider>
  );
}

export default App;