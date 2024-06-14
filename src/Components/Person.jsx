import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from './images/Dhoni.webp'
import img1 from './images/techsophy_logo.jpeg'
import img2 from './images/snist.avif'
import img3 from './images/NSR.png'
import img4 from './images/Udemy.png'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Person = () => {

  const [tabValue,setTabValue] = useState(0);

  return (
    <div style={{padding:'20px 10px'}}>
      <Grid container sx={{margin:'30px 0px',display:'flex',justifyContent:'center',gap:'20px'}}>
        <Grid item>
        <Card sx={{ minWidth: 500 }}>
          <div style={{height:'150px',backgroundColor:'black',padding:'10px'}}>
            <CameraAltOutlinedIcon sx={{float:'right',backgroundColor:'white',height:'40px',width:'40px',borderRadius:'50%',padding:'10px'}}/>
            <img src={img} style={{height:'120px',width:'120px',borderRadius:'50%',backgroundColor:'white',marginTop:'60px',marginLeft:'10px'}}></img>
          </div>
          <div style={{padding:'10px'}}>
            <EditOutlinedIcon sx={{float:'right',height:'40px',width:'40px',padding:'5px'}}/>
          </div>
          <CardContent sx={{marginTop:'50px'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:'200px'}}>
            <div>
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <Typography fontWeight='bold' variant="h5"> Aila Deekshith</Typography>
            <VerifiedUserOutlinedIcon/>
            </div>
            <Typography variant="body1"> Intern @ Techsophy</Typography>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
              <Typography variant="caption">Hyderabad,Telangana,India</Typography>
              <a style={{textDecoration:'none'}} href='#'>Contact info</a>
            </div>
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
              <img src={img1} style={{height:'30px',width:'30px'}}></img>
              <Typography fontWeight='bold' variant="body1">Techsophy</Typography>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
              <img src={img2} style={{height:'30px',width:'30px'}}></img>
              <Typography fontWeight='bold' variant="body1">Sreenidhi Institute of Scienvce and Technology</Typography>
              </div>

            </div>
            </div>
            <Typography color='primary' variant="body2">161 connections</Typography>
          </CardContent>
          <CardActions>
          <Button sx={{borderRadius:'5px',textTransform:'none'}} variant="contained" size="small">Open to</Button>
          <Button sx={{borderRadius:'5px',textTransform:'none'}} variant="outlined" size="small">Add profile section</Button>
          <Button sx={{borderRadius:'5px',textTransform:'none'}} variant="outlined" size="small">More</Button>
          </CardActions>
          </Card>
          <Card variant='outlined' sx={{ minWidth: 500,marginTop:'20px' }}>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <Typography fontWeight='bold' variant='h5'>Experience</Typography>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <AddOutlinedIcon/>
                <EditOutlinedIcon/>
              </div>
              </div>
            </CardContent>
            <CardContent>
              <div style={{display:'flex',gap:'10px'}}>
                <img src={img1} style={{height:'40px',width:'40px'}}></img>
                <div>
                  <Typography fontWeight='bold' variant='h6'>Intern</Typography>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography variant='body1'>TECHSOPHY</Typography>
                    {bull}
                    <Typography variant='body1'>Internship</Typography>
                  </div>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body1'>Jan 2024 - Present</Typography>
                    {bull}
                    <Typography variant='body1'>6 mos</Typography>
                  </div>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body1'>Hyderabad,Telangana</Typography>
                    {bull}
                    <Typography variant='body1'>on-site</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ minWidth: 500,marginTop:'20px' }}>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <Typography fontWeight='bold' variant='h5'>Education</Typography>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <AddOutlinedIcon/>
                <EditOutlinedIcon/>
              </div>
              </div>
            </CardContent>
            <CardContent>
              <div style={{display:'flex',gap:'10px'}}>
                <img src={img2} style={{height:'40px',width:'40px'}}></img>
                <div>
                  <Typography fontWeight='bold' variant='h6'>Sreenidhi Institute of Science and Technology</Typography>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body1'>Bachelor of Technology,Information technology</Typography>
                  </div>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body2'>Dec 2020 - May 2024</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
            <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 15px'}}/>
            <CardContent>
              <div style={{display:'flex',gap:'10px'}}>
                <img src={img3} style={{height:'40px',width:'40px'}}></img>
                <div>
                  <Typography fontWeight='bold' variant='h6'>NSR Impulse Jr College</Typography>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body1'>Intermediate</Typography>
                  </div>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body2'>May 2018 - Mar 2020</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ minWidth: 500,marginTop:'20px' }}>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography fontWeight='bold' variant='h5'>Licenses & Certifications</Typography>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <AddOutlinedIcon/>
                  <EditOutlinedIcon/>
                </div>
              </div>
            </CardContent>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <img src={img4} style={{height:'30px',width:'40px'}}></img>
                <div>
                  <Typography fontWeight='bold' variant='body1'>Spring Boot</Typography>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography variant='body1'>Udemy</Typography>
                  </div>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body1'>Issued on Apr 2024</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
            <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 15px'}}/>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <img src={img4} style={{height:'30px',width:'40px'}}></img>
                <div>
                  <Typography fontWeight='bold' variant='body1'>Machine Learning</Typography>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography variant='body1'>Udemy</Typography>
                  </div>
                  <div style={{display:'flex',gap:'5px'}}>
                    <Typography fontSize='15px' variant='body1'>Issued on Aug 2023</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ minWidth: 500,marginTop:'20px' }}>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography fontWeight='bold' variant='h5'>Skills</Typography>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <AddOutlinedIcon/>
                  <EditOutlinedIcon/>
                </div>
              </div>
            </CardContent>
            <CardContent>
              <Typography fontWeight='bold' variant='body1'>Spring Boot</Typography>
              <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 0px'}}/>
              <Typography fontWeight='bold' variant='body1'>Machine Learning</Typography>
              <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 0px'}}/>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ minWidth: 500,marginTop:'20px' }}>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography fontWeight='bold' variant='h5'>Language</Typography>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <AddOutlinedIcon/>
                  <EditOutlinedIcon/>
                </div>
              </div>
            </CardContent>
            <CardContent>
              <Typography fontWeight='bold' variant='body1'>English</Typography>
              <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 0px'}}/>
              <Typography fontWeight='bold' variant='body1'>Telugu</Typography>
              <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 0px'}}/>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ minWidth: 500,marginTop:'20px' }}>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography fontWeight='bold' variant='h5'>Interests</Typography>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <AddOutlinedIcon/>
                  <EditOutlinedIcon/>
                </div>
              </div>
            </CardContent>
            <Tabs sx={{padding:'0px 10px'}} value={tabValue} onChange={(e,value)=>setTabValue(value)}>
                    <Tab sx={{textTransform:'none'}} label="Companies"/>
                    <Tab sx={{textTransform:'none'}} label='Groups'/>
                    <Tab sx={{textTransform:'none'}} label='Newsletters'/>
                    <Tab sx={{textTransform:'none'}} label='Schools' />
            </Tabs>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item>
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography fontWeight='bold' variant='h6'>Profile language</Typography>
                  <EditOutlinedIcon/>
                </div>
                <Typography variant='caption'>English</Typography>
                <hr style={{color:'rgb(0,0,0,0.2)',margin:'15px 0px'}}/>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Typography fontWeight='bold' variant='h6'>Public profile & URL</Typography>
                  <EditOutlinedIcon/>
                </div>
                <Typography variant='caption'>www.linkedin.com/in/aila-deekshith-44562726a</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </div>
  )
}

export default Person