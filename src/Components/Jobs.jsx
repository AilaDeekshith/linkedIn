import { Button, Card, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import { useContext, useRef} from 'react';
import { AddJob } from './AddJob';
import { Context } from './Context';


const job = [
  {
    "icon":<BookmarkIcon/>,
    "item":'My jobs'
  },
  {
    "icon":<FormatListBulletedIcon/>,
    "item":'Preferences'
  },
  {
    "icon":<AssignmentTurnedInIcon/>,
    "item":'Skills Assessments'
  },
  {
    "icon":<AutoStoriesIcon/>,
    "item":'Interview prep'
  },
  {
    "icon":<YouTubeIcon/>,
    "item":'Job seeker guidance'
  },

]

export const Jobs = () => {


  const addJob = useRef()

  const {jobDetails} = useContext(Context)


  function handleAddJob(){
    addJob.current.showModal();
  }


  return (
    <div style={{marginTop:'30px'}}>
      <AddJob ref={addJob}/>
      <Grid container sx={{display:'flex',justifyContent:'center',gap:'20px'}}>
        <Grid item lg={1.5} md={4} xs={10}>
        <Card variant='outlined' sx={{padding:'10px',borderRadius:'10px'}}>
          {job.map((item,index)=>(
               
              <div key={index} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
               {item.icon}
               <Typography fontWeight='bold' variant='body2'>{item.item}</Typography>
              </div>
            ))}
        </Card>
        
        <Button onClick={handleAddJob} startIcon={<PostAddIcon/>} sx={{marginTop:'10px',borderRadius:'50px',textTransform:'none'}} color='primary' variant="outlined" fullWidth>post a free job</Button>

        </Grid>
        <Grid item lg={4} md={4} xs={10}>
        <Card variant='outlined' sx={{borderRadius:'10px'}}>
          <div style={{padding:'2%'}}>
          <Typography fontWeight='bold' variant='h6'>Top job picks for you</Typography>
          <Typography color='rgb(0,0,0,0.5)' variant='body2'>Based on your profile and search history</Typography>

          {jobDetails.map((job,index)=>(
            <div key={index}>
              <div style={{display:'flex',justifyContent:'space-between',padding:'3% 2%'}}>
              <div style={{display:'flex',gap:'5%'}}>
                <img src={job.organizationIcon} alt='' style={{height:'50px',width:'50px'}}></img>
                <div>
                  <Typography color='primary' fontWeight='bold' variant='body1'>{job.role}</Typography>
                  <Typography variant='body1'>{job.organization}</Typography>
                  <Typography color='rgb(0,0,0,0.5)' variant='body1'>{job.location} ({job.jobType})</Typography>
                </div>
              </div>
              <CloseIcon/>
            </div>
            {index !== jobDetails.length-1?<hr/>:undefined}
            </div> 
          ))}
          </div>
           
          <hr/>

          <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px',gap:'5px'}}>
            <Typography>Show all</Typography>
            <EastIcon/>
          </div>
        </Card>
        </Grid>
        <Grid item lg={2} lgOffset={0} mdOffset={4.25} md={4} xs={10}>
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
