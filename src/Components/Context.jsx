import { createContext } from "react";

export const Context = createContext({
 posts : [],
 getPosts:()=>{},
 getJobs:()=>{},
 jobDetails:[],
 loading:true
})