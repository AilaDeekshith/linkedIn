
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import img1 from './images/Dhoni.webp'
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
    

    
    export default function Self() {
    
      return (
        <Grid container>
          <Grid item>
          <Card variant='outlined'>
          <div style={{backgroundColor:'black',height:'80px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
              <NavLink to='/in/person/'><img src={img1} style={{height:'80px',width:'80px',borderRadius:'50%',marginTop:'40px',backgroundColor:'white'}} alt='icon'></img></NavLink>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'60px',marginBottom:'10px',flexDirection:'column'}}>
            <NavLink to='/in/person/' style={{textDecoration:'none',color:'black'}}><Typography variant='body1'>MS DHONI</Typography></NavLink>
            <Typography variant='caption'>software engineer</Typography>
          </div>
         <hr style={{color:'rgb(0,0,0,0.5)'}}/>

        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
          <Typography variant='caption'>Profile viewers</Typography>
          <Typography variant='caption'>Profile impressions</Typography>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <Typography variant='caption'>23</Typography>
          <Typography variant='caption'>45</Typography>
        </div>
        </div>
        
        <hr style={{color:'rgb(0,0,0,0.5)'}}/>

        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
          <Typography variant='caption'>Unlock 4x more profile visits</Typography>
          <Typography variant='caption'>Try premium for ₹0 </Typography>
        </div>
        
        <hr style={{color:'rgb(0,0,0,0.5)'}}/>

        <div style={{display:'flex',alignItems:'center',padding:'10px'}}>
          <BookmarkIcon fontSize='20px'/>
          <Typography fontWeight='bold' variant='caption'>Saved Items </Typography>
        </div>
        </Card>
        <Card variant='outlined' sx={{marginTop:'10px'}}>
          <div style={{padding:'10px'}}>
          <Typography variant='caption'>Recent</Typography>
          <div style={{display:'flex',alignItems:'center' ,gap:'5px',padding:'5px'}}>
            <GroupIcon fontSize='5px'/>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='caption'>Java Developers</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center' ,gap:'5px',padding:'5px'}}>
            <GroupIcon fontSize='5px'/>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='caption'>Crack Interview</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center', gap:'5px',padding:'5px'}}>
            <GroupIcon fontSize='5px'/>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='caption'>Python Developers</Typography>
          </div>
          <Typography variant='caption' color='primary' fontWeight='bold'>Groups</Typography>
          <div style={{display:'flex',alignItems:'center' ,gap:'5px',padding:'5px'}}>
            <GroupIcon fontSize='5px'/>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='caption'>Java Developers</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center' ,gap:'5px',padding:'5px'}}>
            <GroupIcon fontSize='5px'/>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='caption'>Crack Interview</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center', gap:'5px',padding:'5px'}}>
            <GroupIcon fontSize='5px'/>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='caption'>Python Developers</Typography>
          </div>
          <Typography color='rgb(0,0,0,0.5)' fontWeight='bold' variant='caption'>See all</Typography>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Typography variant='caption' color='primary' fontWeight='bold'>Events</Typography>
          <AddIcon fontSize='50px'/>
          </div>
          <Typography variant='caption' color='primary' fontWeight='bold'>Followed Hashtags</Typography>
          </div>
          <hr style={{color:'rgb(0,0,0,0.5)'}}/>
          <Typography padding='10px' textAlign='center' color='rgb(0,0,0,0.5)' fontWeight='bold' variant='body1'>Discover more</Typography>
        </Card>
          </Grid>
        </Grid>
        
      );
    }

