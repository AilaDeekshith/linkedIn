import { Grid } from '@mui/material';
import React from 'react'
import Self from './Self';
import Posts from './Posts';
import News from './News';
import '../index.css'

const Layout = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <Grid container sx={{display:'flex',justifyContent:'center',gap:'15px'}}>
        <Grid item><Self/></Grid>
        <Grid item lg={4.5}><Posts/></Grid>
        <Grid item><News/></Grid>
      </Grid>
    </div>
  )
}

export default Layout;