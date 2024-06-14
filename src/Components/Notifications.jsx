import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import img from './images/Dhoni.webp'

export const Notifications = () => {
  return (
    <div style={{marginTop:"50px"}}>
        <Grid container sx={{display:'flex',justifyContent:"center",gap:'20px'}}>
            <Grid item lg={1} xs={11}>
                <Card variant='outlined' sx={{padding:'10px',borderRadius:'10px'}}>
                    <Typography fontWeight='bold' variant='body1'>Manage your notifications</Typography>
                    <Typography color='primary' fontWeight='bold' variant='body2'>view settings</Typography>
                </Card>
            </Grid>
            <Grid item lg={4} xs={11}>
                <Card variant='outlined' style={{display:'flex',padding:'20px',gap:'10px'}}>
                    <Button color='success' variant="contained" sx={{borderRadius:'25px'}}>All</Button>
                    <Button variant="outlined" sx={{borderRadius:'25px',color:'rgb(0,0,0)',textTransform:'none',fontWeight:'bold',fontSize:'15px'}}>My posts</Button>
                    <Button variant="outlined" sx={{borderRadius:'25px',color:'rgb(0,0,0)',textTransform:'none',fontWeight:'bold',fontSize:'15px'}}>Mentions</Button>
                </Card>
                <Card variant='outlined' style={{marginTop:'10px'}}>
                <div style={{padding:'20px',display:'flex',gap:'10px'}}>
                    <img src={img} alt='dhoni' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img>
                    <div>
                        <div style={{display:'flex',gap:'75%'}}>
                            <Typography>Sender1</Typography>
                            <Typography variant='caption' marginLeft='auto'>Time1</Typography>
                        </div>
                        <Typography variant='caption'> Node.js' package</Typography>
                    </div>
                </div>
                <hr style={{color:'rgb(0,0,0,0.5)',marginLeft:'25%'}}/>
                </Card>
            </Grid>
            <Grid item lg={2} xs={11}>
                <Card variant='outlined'>
                    <Typography variant='h6'>Manage your notifications</Typography>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}