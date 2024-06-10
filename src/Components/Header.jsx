
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

export default function Header () {

    const [tabValue,setTabValue] = useState(0);

  return (
    <>
    <CssBaseline/>
    <AppBar sx={{backgroundColor:'white',boxShadow:'0px 0px 1px 1px rgb(0,0,0,0.1)',height:'55px'}}>
        <Toolbar>
            <Grid container>
                <Grid item xs={4} sx={{display:'flex',alignContent:'center',justifyContent:'flex-end'}}>
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
                <Grid xs={.75}></Grid>
                <Grid item xs={4.25}>
                    <Tabs sx={{height:'5px'}} value={tabValue} onChange={(e,value)=>setTabValue(value)}>

                    <Tab icon={<HouseRoundedIcon sx={{ fontSize:'25px'}} />} label="Home" sx={{'& .MuiTab-iconWrapper': { marginBottom : '0px'},textTransform:'none',fontSize:'12px',height:'40px',minHeight:'15px',minWidth:'10px'}}/>

                    <Tab icon={<GroupIcon sx={{fontSize:'25px'}}/>} label='My Network' sx={{'& .MuiTab-iconWrapper': {marginBottom :0},textTransform:'none',fontSize:'12px',height:'40px',minHeight:'15px',minWidth:'10px'}}/>

                    <Tab icon={<WorkIcon sx={{fontSize:'25px'}}/>} label='Jobs' sx={{'& .MuiTab-iconWrapper': { marginBottom : 0},textTransform:'none',fontSize:'12px',height:'40px',minHeight:'15px',minWidth:'10px'}}/>

                    <Tab icon={<MessageIcon sx={{fontSize:'25px'}}/>} label='Messaging' sx={{'& .MuiTab-iconWrapper': { marginBottom : 0},textTransform:'none',fontSize:'12px',height:'40px',minHeight:'15px',minWidth:'10px'}}/>

                    <Tab icon={<NotificationsIcon sx={{fontSize:'25px'}}/>} label='Notifications' sx={{'& .MuiTab-iconWrapper': { marginBottom : 0},textTransform:'none',fontSize:'12px',height:'40px',minHeight:'15px',minWidth:'10px'}}/>

                    <Tab icon={<AccountCircleIcon sx={{fontSize:'25px'}}/>} label='Me' sx={{'& .MuiTab-iconWrapper': { marginBottom : 0},textTransform:'none',fontSize:'12px',height:'40px',minHeight:'15px',minWidth:'10px'}}/>
                    </Tabs>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Toolbar>
    </AppBar>
    <Toolbar/>
    </>
  )
}
