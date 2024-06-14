
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import { AppBar, CssBaseline, Grid, InputAdornment, Tab, Tabs, TextField, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';

export default function Header () {

    const [tabValue,setTabValue] = useState(0);

    const navigate = useNavigate()

    function handleTabChange(event,value){
        setTabValue(value);
        
        switch(value){
            case 0:
                navigate('home/')
                break;
            case 1:
                navigate('network/')
                break;
            case 2:
                navigate('jobs/')
                break;
            case 3:
                navigate('messages/')
                break;
            case 4:
                navigate('notifications/')
        
        }
    }

  return (
    <>
    <CssBaseline/>
    <AppBar sx={{backgroundColor:'white',boxShadow:'0px 0px 1px 1px rgb(0,0,0,0.1)'}}>
        <Toolbar>
            <Grid container sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                <Grid item sx={{display:'flex',alignContent:'center',justifyContent:'flex-end'}}>
                    <LinkedInIcon color='primary' sx={{fontSize:40}}/>
                    <TextField sx={{borderRadius:'5px'}}  size='small' placeholder='Search' variant='outlined' InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
                </Grid>
                <Grid item>
                    <Tabs  value={tabValue} onChange={handleTabChange}>

                    <Tab sx={{textTransform:'none'}} icon={<HouseRoundedIcon/>} label="Home"/>

                    <Tab sx={{textTransform:'none'}} icon={<GroupIcon/>} label='My Network'/>

                    <Tab sx={{textTransform:'none'}} icon={<WorkIcon />} label='Jobs'/>

                    <Tab sx={{textTransform:'none'}} icon={<MessageIcon/>} label='Messaging' />

                    <Tab sx={{textTransform:'none'}} icon={<NotificationsIcon />} label='Notifications'/>

                    <Tab sx={{textTransform:'none'}} icon={<AccountCircleIcon />} label='Me'/>

                    <div style={{margin:'10px',borderLeft:'1px solid rgb(0,0,0,0.1)',height:'50px'}}></div>

                    <Tab sx={{textTransform:'none'}} icon={<AppsIcon />} label='For Bussiness'/>

                    </Tabs>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
    <Toolbar/>
    </>
  )
}
