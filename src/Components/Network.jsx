import { Button, Card, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import { Ad } from './Ad';
import { NavLink, useLoaderData } from 'react-router-dom';
import { networks } from './Networks';
import {useMediaQuery} from '@mui/material';

export const Network = () => {

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV

    const {usersDetails} = useLoaderData()

    const verySmallScreen = useMediaQuery('(min-width : 320px)')
    const smallScreen = useMediaQuery('(min-width : 480px)')
    const medium = useMediaQuery('(min-width : 769px)')
    const large = useMediaQuery('(min-width : 1025px)')

    // const size = large ? '40px': medium ? '30px' : smallScreen ? '20px' : verySmallScreen ? '10px' : '5px';


    const imageStyle = {
        height: large ? '80px': medium ? '70px' : smallScreen ? '60px' : verySmallScreen ? '60px' : '80px',
        width: large ? '80px': medium ? '70px' : smallScreen ? '60px' : verySmallScreen ? '60px' : '80px',
        borderRadius:'50%',
        marginTop:large ? '40px': medium ? '35px' : smallScreen ? '30px' : verySmallScreen ? '30px' : '40px',
    };

    const imageBackgroundStyle = {
        display: 'flex', 
        justifyContent: 'center',
        backgroundColor: 'black', 
        height:large ? '80px': medium ? '70px' : smallScreen ? '60px' : verySmallScreen ? '60px' : '80px',
    }

    const gridWidth = {
        width:large ? '19%' : medium ? '30%' : smallScreen ? '40%' : verySmallScreen ? '100%' : '100%'
    }

    const [tabValue,setTabValue] = useState(0);

    const [network,setNetwork] = useState(false);

  return (
        <div style={{marginTop:'30px'}}>
            <Grid container sx={{display:'flex',justifyContent:'center',gap:'40px'}}>
                <Grid lg={2} md={10} sm={10} xs={10} item width='15%'>
                <Card variant='outlined' sx={{borderRadius:'10px'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1% 5%'}}>
                        <Typography fontWeight='bold' sx={{padding:'10px'}}>Manage network</Typography>
                        <Button color='inherit' onClick={()=>setNetwork((pre)=>!pre)}>
                            <KeyboardArrowUpIcon/>
                        </Button>
                    </div>
                <div style={{display:network?'block':'none'}}>
                <hr style={{margin:'0',padding:'0'}}/>
                {networks.map((item,index)=>(
                    <div key={index} style={{padding:'10px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        {item.icon}
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>{item.title}</Typography>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>{item.number}</Typography>
                    </div>
                    </div>
                ))}     
                </div>
                      
                </Card>
                <div style={{margin:'5% 0%'}}>
                    <Ad/>
                </div>
 
                </Grid>
                <Grid lg={8} md={10} sm={10} xs={10} item padding='0% 1%' width='50%'>
                <Card variant='outlined' sx={{marginTop:'10px'}}>
                   <Tabs value={tabValue} onChange={(e,val)=>setTabValue(val)}>
                        <Tab sx={{textTransform:'none',fontWeight:'bold'}} label='Grow'/>
                        <Tab sx={{textTransform:'none',fontWeight:'bold'}} label='Catch Up'/>
                   </Tabs>
                </Card>
                <Card variant='outlined' sx={{marginTop:'10px'}}>
                    <div style={{display:'flex',alignItems:'center',padding:'10px',justifyContent:'space-between'}}>
                        <Typography>No pending invitations</Typography>
                        <Button sx={{textTransform:'none',color:'rgb(0,0,0,0.8)',fontWeight:'bold',fontSize:'17px'}} variant="text">Manage</Button>
                    </div>
                </Card>
                <Card variant='outlined' sx={{marginTop:'10px'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div style={{display:'flex',padding:'10px',flexDirection:'column'}}>
                        <Typography fontSize='15px' fontWeight='bold' variant='h6'>Stay in touch through daily games</Typography>
                        <Typography fontSize='13px' variant='caption'>prep your mind for the workday and compare results</Typography>
                    </div>
                    <div style={{padding:'10px',display:'flex',gap:'10px'}}>
                        <div>
                            <ArrowBackIosIcon/>
                        </div>
                        <div>
                            <ArrowForwardIosIcon/>
                        </div>
                    </div>
                    </div>
                    
                </Card>
                <Card variant='outlined' sx={{margin:'10px 0px'}}>
                    <div style={{display:'flex',alignItems:'center',padding:'10px',justifyContent:'space-between'}}>
                        <Typography>People you may know based on your recent activity</Typography>
                        <Button sx={{textTransform:'none',color:'rgb(0,0,0,0.8)',fontWeight:'bold',fontSize:'17px'}} variant="text">See all</Button>
                    </div>
    
                    <Grid container spacing={2} padding='2% 5%' width='100%'>
                    {usersDetails.map((user,index)=>(
                        <Grid key={index} item sx={gridWidth}>
                            <Card sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                            <div style={imageBackgroundStyle}>
                                <NavLink to={`/in/${`${user.emailId}`.split("@")[0]}`} onClick={()=>localStorage.setItem("profile",user.emailId)}><img style={imageStyle} src={user.icon} alt='icon'/></NavLink>
                            </div>
                            <div style={{display: 'flex',alignItems:'center',marginTop: '30%',marginBottom: '5%',flexDirection: 'column',width:'100%'}}>
                                <NavLink to={`/in/${`${user.emailId}`.split("@")[0]}`} onClick={()=>localStorage.setItem("profile",user.emailId)} style={{textDecoration:'none',color:'black'}}><Typography variant='body1'>{user.name}</Typography></NavLink>
                                <Typography variant='caption'>{user.designation}</Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'center',padding:'5%'}}>
                                <Button size='small' startIcon={<PersonIcon/>} variant='outlined' sx={{borderRadius:'20px'}}>Connect</Button>
                            </div>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Card>
            </Grid>
    </Grid>
</div>
)
}