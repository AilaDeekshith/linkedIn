import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AddSkill } from './AddSkill';

export const Skills = () => {

  const {user} = useLoaderData()

  const navigate = useNavigate();

  const AddSkillRef = useRef()

  function handleRef(){
    AddSkillRef.current.showModal();
  }

  return (
    <>
    <AddSkill ref={AddSkillRef}/>
        <Grid container sx={{justifyContent:'center'}}>
    <Grid item lg={6} md={6} sm={10} xs={11}>
    <Card variant='outlined' sx={{ marginTop: '20px'}}>
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <KeyboardBackspaceIcon fontSize='large' onClick={() => navigate('..')} sx={{':hover':{cursor:'pointer'}}}/>
              <Typography fontWeight='bold' variant='h5'>Skills</Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleRef}/>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Button sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }} color='success' variant="contained">All</Button>
            <Button sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }} color='inherit' variant="outlined">Industry Knowledge</Button>
            <Button sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }} color='inherit' variant="outlined">Tools & Technologies</Button>
          </div>
        </CardContent>
        {user.skills.map((skill, index) => (
          <CardContent key={index}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography fontWeight='bold' variant='body1'>{skill}</Typography>
              <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}}/>
            </div>
            {user.skills.length - 1 !== index ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 0px' }} /> : undefined}
          </CardContent>
        ))}
      </Card>
    </Grid>
  </Grid>
    </>
  )
}