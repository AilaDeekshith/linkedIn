import { Box, Button, Card, CardActions, CardContent, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import img4 from './images/Udemy.png'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useLoaderData, useNavigate } from 'react-router-dom'
import { Ad } from './Ad'
import { AddCertification } from './AddCertification';
import { AddSkill } from './AddSkill';
import { AddLanguage } from './AddLanguage';
import { AddExperience } from './AddExperience';
import { AddEducation } from './AddEducation';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>•</Box>
);

const Profile = () => {

  const {user} = useLoaderData()

  const [tabValue, setTabValue] = useState(0);

  const navigate = useNavigate()

  const certificationRef = useRef()
  const skillRef = useRef()
  const languageRef = useRef()
  const experienceRef = useRef()
  const educationRef = useRef()

  function handleCertificationRef(){
    certificationRef.current.showModal();
  }

  function handleSkillRef(){
    skillRef.current.showModal();
  }

  function handleLanguageRef(){
    languageRef.current.showModal();
  }

  function handleExperienceRef(){
    experienceRef.current.showModal();
  }

  function handleEducationRef(){
    educationRef.current.showModal();
  }

  return (
    <>
      <AddEducation ref={educationRef}/>
      <AddExperience ref={experienceRef}/>
      <AddLanguage ref={languageRef}/>
      <AddSkill ref={skillRef}/>
      <AddCertification ref={certificationRef}/>
      <div style={{ padding: '20px 10px' }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Grid item lg={6} md={10} sm={10} xs={10}>
          <Card variant='outlined'>
            <div style={{ height: '150px', backgroundColor: 'black', padding: '10px' }}>
              <CameraAltOutlinedIcon sx={{ float: 'right', backgroundColor: 'white', height: '40px', width: '40px', borderRadius: '50%', padding: '10px' }} />
              <img src={user.icon} style={{ height: '120px', width: '120px', borderRadius: '50%', backgroundColor: 'white', marginTop: '80px', marginLeft: '10px' }} alt='icon'></img>
            </div>
            <div style={{ padding: '10px' }}>
              <EditOutlinedIcon sx={{ float: 'right', height: '40px', width: '40px', padding: '5px' }} />
            </div>
            <CardContent sx={{ marginTop: '50px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between',paddingRight:'2%'}}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Typography fontWeight='bold' variant="h5">{user.name}</Typography>
                    <VerifiedUserOutlinedIcon />
                  </div>
                  <Typography variant="body1">{user.designation}</Typography>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Typography variant="caption">Hyderabad,Telangana,India</Typography>
                    <a style={{ textDecoration: 'none' }} href='#'>Contact info</a>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src={user.experience[0].organizationIcon} style={{ height: '30px', width: '30px' }} alt='techsophy'></img>
                    <Typography fontWeight='bold' variant="body1">{user.experience[0].organizationName}</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src={user.education[user.education.length-1].schoolIcon} style={{ height: '30px', width: '30px' }} alt='snist'></img>
                    <Typography fontWeight='bold' variant="body1">{user.education[user.education.length-1].school}</Typography>
                  </div>
                </div>
              </div>
              <Typography color='primary' variant="body2">161 connections</Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }} variant="contained" size="medium">Open to</Button>
              <Button color='inherit' sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }} variant="outlined" size="medium">Add profile section</Button>
              <Button color='inherit' sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold' }} variant="outlined" size="medium">More</Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ marginTop: '20px' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontWeight='bold' variant='h5'>Experience</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleExperienceRef}/>
                  <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={() => navigate('details/experience')} />
                </div>
              </div>
            </CardContent>
            {user.experience.map((exp, index) => (
              <CardContent key={index}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <img src={exp.organizationIcon} style={{ height: '40px', width: '40px' }} alt='techsophy'></img>
                  <div>
                    <Typography fontWeight='bold' variant='h6'>{exp.title}</Typography>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Typography variant='body1'>{exp.organizationName}</Typography>
                      {bull}
                      <Typography variant='body1'>{exp.employmentType}</Typography>
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Typography fontSize='15px' variant='body1'>{`${exp.startDate}`.slice(0, 10)} to {`${exp.endDate}`.slice(0, 10)}</Typography>
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Typography fontSize='15px' variant='body1'>{exp.location}</Typography>
                      {bull}
                      <Typography variant='body1'>{exp.locationType}</Typography>
                    </div>
                  </div>
                </div>
                {index !== user.experience.length - 1 ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 15px' }} /> : undefined}
              </CardContent>
            ))}
            <hr style={{ color: 'rgb(0,0,0,0.7)' }} />
            <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px',gap:'5px',':hover':{cursor:'pointer'}}} onClick={() => navigate('details/experience')}>
            <Typography>Show all</Typography>
            <EastIcon/>
          </CardActions>
          </Card>
          <Card variant='outlined' sx={{ marginTop: '20px' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontWeight='bold' variant='h5'>Education</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleEducationRef}/>
                  <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={() => navigate('details/education')} />
                </div>
              </div>
            </CardContent>
            {user.education.map((education, index) => (
              <CardContent key={index}>
                <div style={{ display: 'flex', gap: '10px' }}>
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
                {index !== user.education.length - 1 ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 15px' }} /> : undefined}
              </CardContent>
            ))}
            <hr style={{ color: 'rgb(0,0,0,0.7)' }} />
            <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px',gap:'5px',':hover':{cursor:'pointer'}}} onClick={() => navigate('details/education')}>
            <Typography>Show all</Typography>
            <EastIcon/>
          </CardActions>
          </Card>
          <Card variant='outlined' sx={{ marginTop: '20px' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontWeight='bold' variant='h5'>Licenses & Certifications</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleCertificationRef}/>
                  <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={() => navigate('details/certifications')} />
                </div>
              </div>
            </CardContent>
            {user.certifications.map((certificate, index) => (
              <CardContent key={index}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={img4} style={{ height: '30px', width: '40px' }} alt='udemy'></img>
                  <div>
                    <Typography fontWeight='bold' variant='body1'>{certificate.name}</Typography>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Typography variant='body1'>{certificate.issuingOrganization}</Typography>
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Typography fontSize='15px' variant='body1'>{`${certificate.issuedDate}`.slice(0, 10)}</Typography>
                    </div>
                  </div>
                </div>
                {index !== user.certifications.length - 1 ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 15px' }} /> : undefined}
              </CardContent>
            ))}
            <hr style={{ color: 'rgb(0,0,0,0.7)' }} />
            <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px',gap:'5px',':hover':{cursor:'pointer'}}} onClick={() => navigate('details/certifications')}>
            <Typography>Show all</Typography>
            <EastIcon/>
          </CardActions>
          </Card>
          <Card variant='outlined' sx={{ marginTop: '20px' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontWeight='bold' variant='h5'>Skills</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleSkillRef}/>
                  <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={() => navigate('details/skills')} />
                </div>
              </div>
            </CardContent>
            {user.skills.map((skill, index) => (
              <CardContent key={index}>
                <Typography fontWeight='bold' variant='body1'>{skill}</Typography>
                {user.skills.length - 1 !== index ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 0px' }} /> : undefined}
              </CardContent>
            ))}
            <hr style={{ color: 'rgb(0,0,0,0.7)' }} />
            <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px',gap:'5px',':hover':{cursor:'pointer'}}} onClick={() => navigate('details/skills')}>
            <Typography>Show all</Typography>
            <EastIcon/>
          </CardActions>
          </Card>
          <Card variant='outlined' sx={{ marginTop: '20px' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontWeight='bold' variant='h5'>Language</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={handleLanguageRef}/>
                  <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}} onClick={() => navigate('details/language')} />
                </div>
              </div>
            </CardContent>
            {user.language.map((language, index) => (
              <CardContent key={index}>
                <Typography fontWeight='bold' variant='body1'>{language}</Typography>
                {user.language.length-1 !== index ? <hr style={{ color: 'rgb(0,0,0,0.7)', margin: '15px 0px' }} /> : undefined}
              </CardContent>
            ))}
            <hr style={{ color: 'rgb(0,0,0,0.7)'}} />
            <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px',gap:'5px',':hover':{cursor:'pointer'}}} onClick={() => navigate('details/language')}>
            <Typography>Show all</Typography>
            <EastIcon/>
          </CardActions>
          </Card>
          <Card variant='outlined' sx={{ marginTop: '20px' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography fontWeight='bold' variant='h5'>Interests</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AddOutlinedIcon sx={{':hover':{cursor:'pointer'}}}/>
                  <EditOutlinedIcon sx={{':hover':{cursor:'pointer'}}}/>
                </div>
              </div>
            </CardContent>
            <Tabs sx={{ padding: '0px 10px' }} value={tabValue} onChange={(e, value) => setTabValue(value)}>
              <Tab sx={{ textTransform: 'none' }} label="Companies" />
              <Tab sx={{ textTransform: 'none' }} label='Groups' />
              <Tab sx={{ textTransform: 'none' }} label='Newsletters' />
              <Tab sx={{ textTransform: 'none' }} label='Schools' />
            </Tabs>
          </Card>
        </Grid>
        <Grid item lg={2} md={10} sm={10} xs={10} sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <Card variant='outlined' sx={{ minWidth: 275 }}>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontWeight='bold' variant='h6'>Profile language</Typography>
                <EditOutlinedIcon />
              </div>
              <Typography variant='caption'>English</Typography>
              <hr style={{ color: 'rgb(0,0,0,0.2)', margin: '15px 0px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontWeight='bold' variant='h6'>Public profile & URL</Typography>
                <EditOutlinedIcon />
              </div>
              <Typography variant='caption'>www.linkedin.com/in/aila-deekshith-44562726a</Typography>
            </CardContent>
          </Card>
          <Ad/>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default Profile;

// export async function DataLoader(){

//   const response = await fetch('http://localhost:8080/getUser/'+localStorage.getItem('userEmailId'));
//   const data = await response.json();
//   return data;

// }