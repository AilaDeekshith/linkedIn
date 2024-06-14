import { Button, Card, CardContent, CardHeader, Grid, Tab, Tabs, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TagIcon from '@mui/icons-material/Tag';
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Network = () => {


    const [tabValue,setTabValue] = useState(0);


  return (
        <div style={{marginTop:'50px'}}>
            <Grid container sx={{display:'flex',justifyContent:'center',gap:'40px'}}>
                <Grid item lg={2} xs={8}>
                <Card variant='outlined'>
                <Typography fontWeight='bold' sx={{padding:'10px'}}>Manage network</Typography>
                <div style={{padding:'5px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        <GroupIcon/>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>Connections</Typography>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>163</Typography>
                    </div>
                </div>
                <div style={{padding:'10px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        <GroupIcon/>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>Following & Followers</Typography>
                    </div>
                </div>
                <div style={{padding:'10px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        <GroupsIcon/>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>Groups</Typography>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>3</Typography>
                    </div>
                </div>
                <div style={{padding:'10px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        <EventIcon/>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>Events</Typography>
                    </div>
                </div>
                <div style={{padding:'10px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        <NewspaperIcon/>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>Pages</Typography>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>17</Typography>
                    </div>
                </div>
                <div style={{padding:'10px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        <NewspaperIcon/>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>Newsletters</Typography>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>2</Typography>
                    </div>
                </div>
                <div style={{padding:'10px 20px',display:'flex'}}>
                    <div style={{display:'flex',gap:'20px'}}>
                        <TagIcon/>
                        <Typography color='rgb(0,0,0,0.5)' variant='body1'>Hashtags</Typography>
                    </div>
                </div>             
                </Card>
                </Grid>
                <Grid item lg={5} xs={8}>
                <Card variant='outlined' sx={{marginTop:'10px'}}>
                   <Tabs value={tabValue} onChange={(e,val)=>setTabValue(val)}>
                        <Tab sx={{textTransform:'none'}} label='Grow'/>
                        <Tab sx={{textTransform:'none'}} label='Catch Up'/>
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
                <Card variant='outlined' sx={{marginTop:'10px'}}>
                    <div style={{display:'flex',alignItems:'center',padding:'10px',justifyContent:'space-between'}}>
                        <Typography>People you may know based on your recent activity</Typography>
                        <Button sx={{textTransform:'none',color:'rgb(0,0,0,0.8)',fontWeight:'bold',fontSize:'17px'}} variant="text">See all</Button>
                    </div>
                </Card>
                </Grid>
            </Grid>
        </div>
  )
}
