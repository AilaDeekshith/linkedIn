
import { Button, Typography } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Me(){

  const navigate = useNavigate()

  const user = useSelector((state) => state.Auth.user)

  function handleSignOut(){
    navigate("/")
  }

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
      <NavLink to={`/in/${`${user.emailId}`.split("@")[0]}`}><img onClick={()=>localStorage.setItem("profile",user.emailId)} src={user.icon} style={{height:'60px',width:'60px',borderRadius:'50%'}} alt='Dhoni'></img></NavLink>
        <div>
          <NavLink to={`/in/${`${user.emailId}`.split("@")[0]}`} style={{textDecoration:'none',color:'black'}}><Typography onClick={()=>localStorage.setItem("profile",user.emailId)} fontWeight='bold' variant='h6'>{user.name}</Typography></NavLink>
          <Typography>{user.designation}</Typography>
        </div>
      </div>
      <div style={{padding:'5px'}}>
        <NavLink to={`/in/${`${user.emailId}`.split("@")[0]}`}><Button onClick={()=>localStorage.setItem("profile",user.emailId)} sx={{borderRadius:'20px',fontWeight:'bold'}} variant='outlined' fullWidth>view profile</Button></NavLink>
      </div>
      <hr/>

    <div style={{padding:'10px'}}>
    <Typography fontWeight='bold' variant='body1'>Account</Typography>
      <div style={{display:'flex',margin:'10px 0px'}}>
        <SquareIcon fontSize='small'/>
        <Typography fontWeight='bold' color='rgb(0,0,0,0.5)' variant='body2'>Redeem premium free trial</Typography>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
      <Typography variant='caption'>Settings & privacy</Typography>
      <Typography variant='caption'>Help</Typography>
      <Typography variant='caption'>Language</Typography>
      </div>
    </div>
    <hr/>
    <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
      <Typography variant='caption'>Posts & Activity</Typography>
      <Typography variant='caption'>Job Posting Account</Typography>
    </div>
      
    <hr/>
        
    <Typography padding='10px' variant='caption' onClick={handleSignOut}>Sign Out</Typography>
      
    </div>
  )
}

export default Me;