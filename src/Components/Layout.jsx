import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Self from './Self';
import Posts from './Posts';
import News from './News';
import { Ad } from './Ad';

const Layout = () => {
  return (
    <div style={{marginTop:'30px'}}>
      <Grid container sx={{display:'flex',justifyContent:'center', gap:'20px'}}>
        <Grid item lg={1.5} md={2.5} sm={10} xs={10} ><Self/></Grid>
        <Grid item lg={4} md={8} sm={10} xs={10}><Posts/></Grid>
        <Grid container lg={2} lgOffset={0} mdOffset={3} smOffset={2.8} md={8} sm={10} xs={10} sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
          <Grid><News/></Grid>
          <Grid><Ad/></Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout;

export async function userLoader(){
const [user,usersDetails,posts,jobPosts] = await Promise.all([
  fetch('http://localhost:8080/getUser/'+localStorage.getItem('userEmailId')).then(response => response.json()),
  fetch('http://localhost:8080/getAllUsersDetails').then(response => response.json()),
  fetch('http://localhost:8080/getAllPosts').then((response) => response.json()),
  fetch('http://localhost:8080/getAllJobPosts').then((response) => response.json())
]);
 return {user,usersDetails,posts,jobPosts} 
}