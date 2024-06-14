import { Button, Card, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import React from 'react'
import img from './images/Dhoni.webp'

export const Messages = () => {
  return (
    <Grid container direction='column' alignItems='center' padding='10px'>
        <Grid item>
        <Card variant='outlined' sx={{marginTop:'50px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'200px',padding:'10px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <Typography fontWeight='bold' variant='body1'>Messaging</Typography>
            <TextField  sx={{'& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'}},backgroundColor:'#edf3f8',borderRadius:'10px'}}  size='small' placeholder='Search messages' variant='outlined' InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
            />
            </div>
            <div style={{display:'flex',gap:'10px'}}>
                <MoreHorizIcon/>
                <ModeEditOutlineOutlinedIcon/>
            </div>
          </div>
          <hr/>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px'}}>
          <Button sx={{borderRadius:'25px',textTransform:'none'}} color='success' variant="contained">Focused</Button>
          <div style={{borderLeft:'1px solid rgb(0,0,0,0.5)',height:'30px',placeItems:'center'}}></div>
          <Button sx={{borderRadius:'25px',textTransform:'none'}} color='inherit' variant="outlined">Unread</Button>
          <Button sx={{borderRadius:'25px',textTransform:'none'}} color='inherit' variant="outlined">My Connections</Button>
          <Button sx={{borderRadius:'25px',textTransform:'none'}} color='inherit' variant="outlined">In Mail</Button>
          <Button sx={{borderRadius:'25px',textTransform:'none'}} color='inherit' variant="outlined">Starred</Button>
          </div>
          <hr style={{color:'rgb(0,0,0,0.5)'}}/>
          <div style={{width:'45%',height:'70vh',overflow:'scroll'}}>
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
          </div>
        </Card>
        </Grid>
    </Grid>
  )
}
