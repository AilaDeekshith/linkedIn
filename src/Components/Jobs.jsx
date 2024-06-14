import { Button, Card, CardActions, Grid, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import img from './images/TechMahindra.jpeg'
import React from 'react'

export const Jobs = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <Grid container sx={{display:'flex',justifyContent:'center',gap:'20px'}}>
        <Grid item lg={1.5} md={4} xs={10}>
        <Card variant='outlined' sx={{padding:'10px',borderRadius:'10px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
          <BookmarkIcon/>
          <Typography fontWeight='bold' variant='body2'>My jobs</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
          <FormatListBulletedIcon/>
          <Typography fontWeight='bold' variant='body2'>Preferences</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
          <AssignmentTurnedInIcon/>
          <Typography fontWeight='bold' variant='body2'>Skills Assessments</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
          <AutoStoriesIcon/>
          <Typography fontWeight='bold' variant='body2'>Interview prep</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
          <YouTubeIcon/>
          <Typography fontWeight='bold' variant='body2'>Job seeker guidance</Typography>
          </div>
        </Card>
        
        <Button startIcon={<PostAddIcon/>} sx={{marginTop:'10px',borderRadius:'50px',textTransform:'none'}} color='primary' variant="outlined" fullWidth>post a free job</Button>

        </Grid>
        <Grid item lg={4} md={4} xs={10}>
        <Card variant='outlined' sx={{padding:'10px',borderRadius:'10px'}}>
          <Typography fontWeight='bold' variant='h6'>Top job picks for you</Typography>
          <Typography color='rgb(0,0,0,0.5)' variant='body2'>Based on your profile and search history</Typography>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{marginTop:'10px',display:'flex',gap:'10px'}}>
              <img src={img} alt='' style={{height:'50px',width:'50px'}}></img>
              <div>
                <Typography color='primary' fontWeight='bold' variant='body1'>Dotnet Developer (ReactJS)</Typography>
                <Typography variant='body1'>Tech Mahindra</Typography>
                <Typography color='rgb(0,0,0,0.5)' variant='body1'>Hyderabad, Telangana, India(Hybrid)</Typography>
                <Typography color='rgb(0,0,0,0.5)' variant='caption'>promoted</Typography>
              </div>
            </div>
            <CloseIcon/>
          </div>
          <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 15px'}}/>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{marginTop:'10px',display:'flex',gap:'10px'}}>
              <img src={img} alt='' style={{height:'50px',width:'50px'}}></img>
              <div>
                <Typography color='primary' fontWeight='bold' variant='body1'>Java Developer with React</Typography>
                <Typography variant='body1'>Truelancer.com</Typography>
                <Typography color='rgb(0,0,0,0.5)' variant='body1'>India (Remote)</Typography>
                <Typography color='rgb(0,0,0,0.5)' variant='caption'>promoted</Typography>
              </div>
            </div>
            <CloseIcon/>
          </div>
          <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 0px 0px 0px'}}/>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px',gap:'5px'}}>
            <Typography>Show all</Typography>
            <EastIcon/>
          </div>
        </Card>
        </Grid>
        <Grid item lg={2} xs={10}>
        <Card variant='outlined' sx={{padding:'10px'}}>
          <Typography fontWeight='bold' variant='body1'>Job seeker guidance</Typography>
          <Typography variant='caption'>Recommended based on your activity</Typography>
          <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <Typography>Show more</Typography>
            <EastIcon/>
          </div>
        </Card>
        </Grid>
      </Grid>
    </div>
  )
}
