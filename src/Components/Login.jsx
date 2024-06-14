import { AppBar, Button, Collapse, CssBaseline, Grid, IconButton, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Tab, Tabs, TextField, Toolbar, Typography, rgbToHex } from '@mui/material';
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkIcon from '@mui/icons-material/Work';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import img1 from './images/loginImage.svg';
import GoogleIcon from '@mui/icons-material/Google';


export const Login = ({auth}) => {
    const [tabValue,setTabValue] = useState(0);

    const [details,setDetails] = useState({
        email:'',
        password:''
    })

    function handleChange(event){
        setDetails((pre) =>{
            return ({
                ...pre,
                [event.target.name]:[event.target.value],
            }
        )}
    )
    }

    function handleSignIn(){
        if(details.email && details.password){
            console.log(details);
            auth();
        }
    }

  return (
    <>
    <CssBaseline/>
            <Grid container sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                <Grid item sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Typography color='primary' fontSize={30}>LinkedIn</Typography>
                    <LinkedInIcon color='primary' sx={{fontSize:'30px'}}/>
                </Grid>
                <Grid item sx={{display:'flex',alignItems:'center',gap:'20px'}}>
                <Tabs indicatorColor='white' value={tabValue} onChange={(e,value)=>setTabValue(value)}>
                    <Tab sx={{textTransform:'none'}} icon={<ArticleIcon/>} label="Articles"/>
                    <Tab sx={{textTransform:'none'}} icon={<PeopleIcon/>} label="People"/>
                    <Tab sx={{textTransform:'none'}} icon={<LocalLibraryIcon/>} label="Learning"/>
                    <Tab sx={{textTransform:'none'}} icon={<WorkIcon/>} label="Jobs"/>
                    <Tab sx={{textTransform:'none'}} icon={<SportsEsportsIcon/>} label="Games"/>
            
                    <div style={{marginTop:'10px',borderLeft:'1px solid rgb(0,0,0,0.1)',height:'50px'}}></div>

                </Tabs>
                <Button sx={{textTransform:"none",color:'rgb(0,0,0,0.7)',fontSize:'20px'}} variant="text">Join now</Button>
                <Button sx={{textTransform:'none',borderRadius:'10px'}} variant="outlined">Sign in</Button>
                </Grid>
            </Grid>
            <Grid container sx={{marginTop:'50px',display:'flex',justifyContent:'space-between'}}>
                <Grid item></Grid>
                <Grid item alignItems='center' sx={{maxWidth:'500px'}}>
                    <Typography color='brown' variant='h3'>Welcome to your professional community</Typography>
                    <div style={{marginTop:'30px',display:'flex',flexDirection:'column',gap:'10px'}}>
                        <TextField onChange={handleChange}  value={details.email} type='email' placeholder='Email or Phone' name='email' variant="outlined" fullWidth/>
                        <TextField onChange={handleChange} value={details.password} type='password' placeholder='Password' name='password' variant="outlined" fullWidth InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                            <IconButton sx={{fontSize:'20px'}}>Show</IconButton>
                            </InputAdornment>
                            ),
                        }}/>
                    </div>
                    <Typography sx={{margin:'30px 0px',color:'purple',fontWeight:'bold'}}>Forgot Password?</Typography>
                    <Button onClick={handleSignIn} sx={{height:'50px',borderRadius:'50px'}} variant="contained" fullWidth>Sign in</Button>
                    <div style={{display:'flex',marginTop:'30px',alignItems:'center',gap:'10px'}}>
                        <hr style={{width:'50%'}}/>
                        <Typography>or</Typography>
                        <hr style={{width:'50%'}}/>
                    </div>
                    <p style={{color:'rgb(0,0,0,0.5)',margin:'30px 0px'}}>By clicking Continue to join or sign in,you agree to LinkedIn's <a href='#'>User Agreement</a>,<a href='#'>Privacy Policy</a>,and <a href='#'>cookie policy</a></p>
                    <div style={{margin:'20px 0px',display:'flex',flexDirection:'column',gap:'10px'}}>
                    <Button sx={{textTransform:'none',height:'50px',borderRadius:'50px',border:'1px solid rgb(0,0,0,0.5)',color:'rgb(0,0,0,0.7)'}} variant="outlined" fullWidth startIcon={<GoogleIcon/>}>Continue with Google</Button>
                    <Button sx={{textTransform:'none',height:'50px',borderRadius:'50px',border:'1px solid rgb(0,0,0,0.5)',color:'rgb(0,0,0,1)'}} variant="outlined" fullWidth>New to LinkedIn? join now</Button>
                    </div>
                </Grid>
                <Grid item></Grid>
                <Grid item style={{display:'flex',alignItems:'end'}}>
                    <img className='loginImage' src={img1}></img>
                </Grid>
            </Grid>
    <Toolbar/>
    </>
  )
}
