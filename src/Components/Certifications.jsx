import { Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import img4 from './images/Udemy.png'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AddCertification } from './AddCertification';

export const Certifications = () => {

  const {user} = useLoaderData()
  const navigate = useNavigate();

  const AddCertificationRef = useRef()

  function handleRef(){
    AddCertificationRef.current.showModal();
  }

  return (
    <>
    <AddCertification ref={AddCertificationRef}/>
    <Grid container sx={{justifyContent:'center'}}>
    <Grid item lg={6} md={6} sm={8} xs={11}>
    <Card variant='outlined' sx={{marginTop:'20px'}}>
            <CardContent>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                  <KeyboardBackspaceIcon fontSize='large' sx={{':hover':{cursor:'pointer'}}} onClick={()=>navigate('..')}/>
                  <Typography fontWeight='bold' variant='h6'>Licenses & Certifications</Typography>
                </div>

                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleRef}/>
                </div>
              </div>
            </CardContent>
            {user.certifications.map((certificate,index) => (
                              <CardContent key={index}>
                              <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                                <img src={img4} style={{height:'30px',width:'40px'}} alt='udemy'></img>
                                <div>
                                  <Typography fontWeight='bold' variant='body1'>{certificate.name}</Typography>
                                  <div style={{display:'flex',gap:'5px'}}>
                                    <Typography variant='body1'>{certificate.issuingOrganization}</Typography>
                                  </div>
                                  <div style={{display:'flex',gap:'5px'}}>
                                    <Typography fontSize='15px' variant='body1'>{`${certificate.issuedDate}`.slice(0,10)}</Typography>
                                  </div>
                                </div>
                              </div>
                              <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}}/>
                              </div>
                              {index !== user.certifications.length-1 ? <hr style={{color:'rgb(0,0,0,0.7)',margin:'15px 15px'}}/> : undefined}
                            </CardContent>
            ))}
          </Card>
    </Grid>
  </Grid>
    </>
  )
}