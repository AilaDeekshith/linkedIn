import React, { useState } from 'react';
import {AppBar, Grid ,Tab, Tabs, TextField, Toolbar} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function Header () {

    const [tabValue,setTabValue] = useState(0);


  return (
    <AppBar sx={{backgroundColor:'white',boxShadow:'0px 0px 1px 1px rgb(0,0,0,0.1)'}}>
        <Toolbar>
            <Grid container sx={{placeItems:'center'}}>
                <Grid item xs={4.75} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <LinkedInIcon color='primary' />
                    <SearchIcon color='secondary'/>
                    <input type='text' placeholder='Search' style={{width:'200px',borderRadius:'5px'}}/>  
                </Grid>
                <Grid item xs={4.25}>
                    <Tabs value={tabValue} onChange={(e,value)=>setTabValue(value)}>
                        <Tab icon={<HouseRoundedIcon/>} sx={{textTransform:'none',minHeight:15}} label='Home'/>
                        <Tab icon={<GroupIcon/>} sx={{textTransform:'none',minHeight:15}} label='My Network'/>
                        <Tab icon={<WorkIcon/>} sx={{textTransform:'none',minHeight:15}} label='Jobs'/>
                        <Tab icon={<MessageIcon/>} sx={{textTransform:'none',minHeight:15}} label='Messaging'/>
                        <Tab icon={<NotificationsIcon/>} sx={{textTransform:'none',minHeight:15}} label='Notifications'/>
                        <Tab icon={<AccountCircleIcon/>} sx={{textTransform:'none',minHeight:15}} label='Me'/>
                    </Tabs>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

