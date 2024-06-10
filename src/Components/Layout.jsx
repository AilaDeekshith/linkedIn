import { Grid } from '@mui/material';
import React from 'react'
import Self from './Self';
import Posts from './Posts';
import News from './News';
import '../index.css'

const Layout = () => {
  return (
    <div className='layout'>
      <Grid container>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={1.75}><Self/></Grid>
        <Grid item xs={.25}></Grid>
        <Grid item xs={4.5}><Posts/></Grid>
        <Grid item xs={.25}></Grid>
        <Grid item xs={2.5}><News/></Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default Layout;