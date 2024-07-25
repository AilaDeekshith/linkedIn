import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AddExperience } from './AddExperience';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export const Experience = () => {

  const { user } = useLoaderData()

  const navigate = useNavigate();

  const AddExperienceRef = useRef()

  function handleRef(){
    AddExperienceRef.current.showModal();
  }

  return (
    <>
      <AddExperience ref={AddExperienceRef}/>
        <Grid container sx={{ justifyContent: 'center' }}>
      <Grid item lg={6} md={6} sm={8} xs={11}>
        <Card variant='outlined' sx={{ marginTop: '20px', borderRadius: '10px' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <KeyboardBackspaceIcon sx={{':hover':{cursor:'pointer'}}} onClick={() => navigate('..')} fontSize='medium' />
                <Typography fontWeight='bold' variant='h6'>Experience</Typography>
              </div>
              <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleRef}/>
            </div>
          </CardContent>
                {user.experience.map((exp, index) => (
                  <CardContent key={index}>
                    <div style={{ display: 'flex',justifyContent:'space-between'}}>
                      <div style={{display:'flex',gap:'1%',width:'100%'}}>
                      <img src={exp.organizationIcon} style={{ height: '50%', width: '7%' }} alt='techsophy'></img>
                        <div style={{width:'100%'}}>
                          <Typography fontWeight='bold' variant='h6'>{exp.title}</Typography>
                          <div style={{ display: 'flex', gap: '5px' }}>
                            <Typography variant='body1'>{exp.organizationName}</Typography>
                            {bull}
                            <Typography variant='body1'>{exp.employmentType}</Typography>
                          </div>
                          <div style={{ display: 'flex', gap: '5px' }}>
                            <Typography fontSize='15px' variant='body1'>{`${exp.startDate}`.slice(0, 10)}  to  {`${exp.endDate}`.slice(0, 10)}</Typography>
                          </div>
                          <div style={{ display: 'flex', gap: '5px' }}>
                            <Typography fontSize='15px' variant='body1'>{exp.location}</Typography>
                            {bull}
                            <Typography variant='body1'>{exp.locationType}</Typography>
                          </div>
                        </div>
                      </div>
                      <EditOutlinedIcon fontSize='medium' sx={{':hover':{cursor:'pointer'}}}/>
                    </div>
                    {index !== user.experience.length - 1 ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 15px' }} /> : undefined}
                  </CardContent>
                ))}
        </Card>
      </Grid>
    </Grid>
    </>
  )
}
