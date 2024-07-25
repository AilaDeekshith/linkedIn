import React, { useRef } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AddLanguage } from './AddLanguage';

export const Language = () => {

  const {user} = useLoaderData()

  const navigate = useNavigate();

  const AddLanguageRef = useRef()

  function handleRef(){
    AddLanguageRef.current.showModal();
  }

  return (
    <>
    <AddLanguage ref={AddLanguageRef}/>
        <Grid container sx={{justifyContent:'center'}}>
    <Grid item lg={6} md={6} sm={8} xs={11}>
    <Card variant='outlined' sx={{ marginTop: '20px'}}>
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <KeyboardBackspaceIcon fontSize='large' onClick={() => navigate('..')} sx={{':hover':{cursor:'pointer'}}}/>
              <Typography fontWeight='bold' variant='h5'>Language</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleRef}/>
            </div>
          </div>
        </CardContent>
        {user.language.map((language, index) => (
          <CardContent key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontWeight='bold' variant='body1'>{language}</Typography>
              <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}}/>
            </div>
            {index !== user.language.length - 1 ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 0px' }} /> : undefined}
          </CardContent>
        ))}
      </Card>
    </Grid>
  </Grid>
    </>
  )
}



