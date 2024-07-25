import { Grid, Typography } from '@mui/material'

import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkIcon from '@mui/icons-material/Work';

function Business(){

  return (
    <div className='businessDropDown'>
    <Grid container sx={{display:'flex',justifyContent:'center'}}>
      <Grid item>
        <div style={{display:'flex',padding:'30px',gap:'40px'}}>
        <div>
            <Typography fontWeight='bold' variant='h6'>My Apps</Typography>
            <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'25px'}}>
              <ExploreIcon/>
              <Typography fontWeight='bold' variant='body2'>Find New Clients</Typography>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'25px'}}>
              <GroupIcon/>
              <Typography fontWeight='bold' variant='body2'>Groups</Typography>
            </div>
            <Typography color='rgb(0,0,0,0.5)' fontWeight='bold' variant='body1'>Talent</Typography>
            <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'25px'}}>
              <BarChartIcon/>
              <Typography fontWeight='bold' variant='body2'>Talent Insights</Typography>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'25px'}}>
              <WorkIcon/>
              <Typography fontWeight='bold' variant='body2'>Post a job</Typography>
            </div>
            <Typography color='rgb(0,0,0,0.5)' fontWeight='bold' variant='body1'>Sales</Typography>
            <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'25px'}}>
              <HowToRegIcon/>
              <Typography fontWeight='bold' variant='body2'>services market place</Typography>
            </div>
            <Typography color='rgb(0,0,0,0.5)' fontWeight='bold' variant='body1'>Marketing</Typography>
            <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'25px'}}>
              <CrisisAlertIcon/>
              <Typography fontWeight='bold' variant='body2'>Advertise</Typography>
            </div>
            <Typography color='rgb(0,0,0,0.5)' fontWeight='bold' variant='body1'>Learning</Typography>
            <div style={{display:'flex',alignItems:'center',gap:'5px',padding:'25px'}}>
              <SmartDisplayIcon/>
              <Typography fontWeight='bold' variant='body2'>Learning</Typography>
            </div>

        </div>
        <hr/>
        <div>
          <Typography fontWeight='bold' variant='h6'>Explore more for business</Typography>
          <div style={{display:'flex',gap:'5px',padding:'15px',flexDirection:'column'}}> 
          <Typography fontWeight='bold' variant='body1'>Hire on LinkedIn</Typography>
          <Typography variant='caption'>Find,attract and recruit talent</Typography>
          </div>

          <div style={{display:'flex',gap:'5px',padding:'15px',flexDirection:'column'}}>
          <Typography fontWeight='bold' variant='body1'>Sell with LinkedIn</Typography>
          <Typography variant='caption'>Unlock sales opportunities</Typography>
          </div>

          <div style={{display:'flex',gap:'5px',padding:'15px',flexDirection:'column'}}>
          <Typography fontWeight='bold' variant='body1'>Post a job for free</Typography>
          <Typography variant='caption'>Get qualified applicants quickly</Typography>
          </div>

          <div style={{display:'flex',gap:'5px',padding:'15px',flexDirection:'column'}}>
          <Typography fontWeight='bold' variant='body1'>Advertise on LinkedIn</Typography>
          <Typography variant='caption'>Acquire customers and grow your business</Typography>
          </div>

          <div style={{display:'flex',gap:'5px',padding:'15px',flexDirection:'column'}}>
          <Typography fontWeight='bold' variant='body1'>Get started with Premium</Typography>
          <Typography variant='caption'>Expand and leverage your network</Typography>
          </div>

          <div style={{display:'flex',gap:'5px',padding:'15px',flexDirection:'column'}}>
          <Typography fontWeight='bold' variant='body1'>Learn with LinkedIn</Typography>
          <Typography variant='caption'>Courses to develop your enployees</Typography>
          </div>

          <div style={{display:'flex',gap:'5px',padding:'15px',flexDirection:'column'}}>
          <Typography fontWeight='bold' variant='body1'>Admin Center</Typography>
          <Typography variant='caption'>Manage billing and account details</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center',padding:'20px'}}>
            <Typography fontWeight='bold'>Create a Company Page</Typography>
            <AddIcon/>
          </div>
        </div>
        </div>
      </Grid>
    </Grid>

    </div>
  )
}

export default Business;