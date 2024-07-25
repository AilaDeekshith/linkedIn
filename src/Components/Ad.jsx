import { Card, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Ad = () => {

  const user = useSelector((state)=> state.Auth.user)

  return (
    <Card variant='outlined' sx={{ padding: '15px' }}>
      <div style={{ display: 'flex', alignItems: 'center', float: 'right', gap: "5px" }}>
        <Typography fontWeight='bold' variant='caption'>Ad</Typography>
        <MoreHorizIcon />
      </div>
      <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }}>
        <Typography variant='caption'>{user.name}, reactivate your premium free trial today!!</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={user.icon} alt='dhoni' style={{ height: '70px', width: '70px', borderRadius: '50%', border: '1px solid black' }}></img>
        <LinkedInIcon sx={{ fontSize: '70px' }} />
      </div>
      <Typography marginTop='10px' textAlign='center' variant='inherit'>See who's viewed your profile in last 365 days</Typography>
    </Card>
  )
}
