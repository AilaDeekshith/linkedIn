import { Card, CardContent, Grid, Typography } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AddEducation } from './AddEducation';
import { useRef } from 'react';

export const Education = () => {

  const { user } = useLoaderData()
  const navigate = useNavigate();

  const AddEducationRef = useRef()

  function handleRef(){
    AddEducationRef.current.showModal();
  }

  return (
    <>
      <AddEducation ref={AddEducationRef}/>
        <Grid container sx={{ justifyContent: 'center' }}>
      <Grid item lg={6} md={6} sm={8} xs={11}>
        <Card variant='outlined' sx={{ marginTop: '20px', borderRadius: '10px' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                <KeyboardBackspaceIcon sx={{':hover':{cursor:'pointer'}}} onClick={() => navigate('..')} fontSize='large' />
                <Typography fontWeight='bold' variant='h6'>Education</Typography>
              </div>
              <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleRef}/>
            </div>
          </CardContent>
          {user.education.map((education, index) => (
            <CardContent key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '5%' }}>
                  <img src={education.schoolIcon} style={{ height: '40px', width: '40px' }} alt='snist'></img>
                  <div>
                    <Typography fontWeight='bold' variant='h6'>{education.school}</Typography>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Typography fontSize='15px' variant='body1'>{education.degree}</Typography>
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Typography fontSize='15px' variant='body1'>{`${education.startDate}`.slice(0, 10)} to {`${education.endDate}`.slice(0, 10)}</Typography>
                    </div>
                  </div>
                </div>
                <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}}/>
              </div>
              {index !== user.education.length - 1 ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 15px' }} /> : undefined}
            </CardContent>
          ))}
        </Card>
      </Grid>
    </Grid>
    </>
  )
}