import { Button, Card, InputAdornment, TextField, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import CopyrightIcon from '@mui/icons-material/Copyright';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {


    const navigate = useNavigate();

    const [show,setShow] = useState(false);

    // const [emailId,setEmailId] = useState('')
    // const [password,setPassword] = useState('')
    // const [details,setDetails] = useState({
    //     emailId:'',
    //     password:''
    // })


    // function handleEmailId(event){
    //     setEmailId(event.target.value)
    // }

    // function handlePassword(event){
    //     setPassword(event.target.value)
    // }

    const [details,setDetails] = useState({
        emailId:'',
        password:''
    })

    function handleChange(event){
        setDetails((pre) =>{
            return ({
                ...pre,
                [event.target.name]:event.target.value,
            }
        )})
    }

    function handleSignIn(){

        // details.emailId = emailId;
        // details.password = password;

        // console.log(details)

        fetch('http://localhost:8080/register',{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(details)
        })
        .then((Response)=>{
            if(Response.ok){
                navigate('/home/')
                localStorage.setItem('userEmailId',details.emailId)
            }
        })
    }



  return (
    <div>

        <div style={{display:'flex',alignItems:'center',marginLeft:'20%',marginTop:'1%'}}>
           
            <Typography color='primary' fontWeight='bold' variant='h4'>Linked</Typography>
            <LinkedInIcon color='primary' fontSize='large'/>

        </div>

        <div style={{marginTop:'1%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Typography variant='h4'>Make the most of your professional life</Typography>
            <Card variant='outlined' sx={{padding:'20px',marginTop:'20px'}}>
                <div style={{padding:'10px',display:'flex',flexDirection:'column',gap:'5px'}}>
                    <Typography fontWeight='bold' variant='body1'>Email</Typography>
                    <TextField onChange={handleChange} value={details.emailId} name='emailId' size='small' variant="outlined" />
                </div>
                <div style={{padding:'10px',display:'flex',flexDirection:'column',gap:'5px'}}>
                    <Typography fontWeight='bold' variant='body1'>Pasword(6+characters)</Typography>
                    <TextField type={show?'text':'password'} onChange={handleChange} value={details.password} name='password' size='small' variant="outlined" InputProps={{
                        endAdornment:<InputAdornment position='end'><VisibilityIcon sx={{":hover":{cursor:'pointer'}}} onClick={()=>setShow((pre)=>!pre)}/></InputAdornment>
                    }}/>
                </div>

                <div style={{padding:'10px',display:'flex',flexDirection:'column'}}>
                    <Typography variant='caption'>By clicking Agree & Join or Continue, you agree to the LinkedIn</Typography>
                    <Typography textAlign='center' variant='caption'><span style={{fontWeight:'bold',fontSize:'13px',color:'#0a66c2'}}>User Agreement</span>, <span style={{fontWeight:'bold',fontSize:'13px',color:'#0a66c2'}}>Privacy policy</span>, and <span style={{fontWeight:'bold',fontSize:'13px',color:'#0a66c2'}}>Cookie policy</span></Typography>
                </div>
                
                <div style={{padding:'10px'}}>
                    <Button onClick={handleSignIn} sx={{borderRadius:'20px'}} color='primary' variant='contained' fullWidth>
                        <Typography fontWeight='bold' textTransform='none'>Agree & Join</Typography>
                    </Button>
                </div>

                <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px'}}>
                    <hr style={{width:'50%'}}/>
                    <Typography variant='body1'>or</Typography>
                    <hr style={{width:"50%"}}/>
                </div>

                <div style={{padding:'10px'}}>
                <Button size='medium' sx={{textTransform:'none',borderRadius:'50px',border:'1px solid rgb(0,0,0,0.5)',color:'rgb(0,0,0,0.7)'}} variant="outlined" fullWidth startIcon={<GoogleIcon/>}>Continue with Google</Button>
                </div>
                
                <div style={{padding:'10px',display:'flex',justifyContent:'center',gap:'5px'}}>
                    <Typography variant='body1'>Already on LinkedIn?</Typography>
                    <Typography sx={{":hover":{cursor:'pointer'}}} onClick={()=> navigate('..')} color='primary' fontWeight='bold' variant='body1'>Sign in</Typography>
                </div>
            </Card>
            <div style={{padding:'20px 10px',display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                <Typography variant='body2'>Looking to create page for business?</Typography>
                <Typography color='primary' fontWeight='bold' variant='body2'> Get help</Typography>
            </div>
        </div>


        <div style={{position:'absolute',bottom:'0',display:'flex',alignItems:'center',justifyContent:'center',width:'99%',padding:'10px',gap:'15px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                <div style={{display:'flex'}}>
                    <Typography variant='body2'>Linked</Typography>
                    <LinkedInIcon fontSize='small'/>
                </div>
                <CopyrightIcon sx={{fontSize:'15px'}}/>
                <Typography variant='caption'>2024</Typography>
            </div>

            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Accessibility</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>User Agreement</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>About</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Privacy policy</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Cookie policy</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Copyrigth policy</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Brand policy</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Guest Controls</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Community Guidelines</Typography>
            <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Language</Typography>
            <KeyboardArrowDownIcon/>

        </div>
        
    </div>
  )
}
