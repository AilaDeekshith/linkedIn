import { Grid, Typography } from '@mui/material'
import React from 'react'
import img from './images/Dhoni.webp'
import './person.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Person = () => {
  return (
    <div>
      <Grid container sx={{margin:'10px 0px'}}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={6.25}>
          <div className='person'>
            <img src={img} alt='dhoni'></img>
          </div>
        </Grid>
        <Grid xs={0.25}></Grid>
        <Grid item xs={2}>
          <div className='personRight'>
            <div className='language'>
              <Typography variant='h6' sx={{fontWeight:'bold'}}>Profile language</Typography>
              <EditOutlinedIcon/>
            </div>
            <p style={{fontSize:'15px',color:'rgb(0,0,0,0.5)'}}>English</p>
            <hr style={{margin:'10px 0px'}}/>
            <div className='language'>
              <Typography variant='h6' sx={{fontWeight:'bold'}}>Public profile & URL</Typography>
              <EditOutlinedIcon/>
            </div>
            <p style={{fontSize:'15px',color:'rgb(0,0,0,0.5)'}}>www.linkedin.com/in/aila-deekshith-44562726a</p>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  )
}

export default Person