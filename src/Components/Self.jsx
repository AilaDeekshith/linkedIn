import React, { useEffect, useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useLoaderData } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import SquareIcon from '@mui/icons-material/Square';
import { useSelector } from 'react-redux';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(1190)]: {
    width: '100%',
  },
}));

export default function Self() {

  const user = useSelector((state)=>state.Auth.user)

  return (
    <StyledGrid container>
      <Grid item width='100%'>
        <Card variant='outlined'>
          <div style={{ backgroundColor: 'black', height: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NavLink onClick={()=>localStorage.setItem("profile",user.emailId)} to={`/in/${`${user.emailId}`.split("@")[0]}`}>
                <img
                  src={user.icon}
                  style={{
                    height: '80px',
                    width: '80px',
                    borderRadius: '50%',
                    marginTop: '40px',
                    backgroundColor: 'white'
                  }}
                  alt='icon'
                />
              </NavLink>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '60px',
              marginBottom: '10px',
              flexDirection: 'column'
            }}
          >
            <NavLink onClick={()=>localStorage.setItem("profile",user.emailId)} to={`/in/${`${user.emailId}`.split("@")[0]}`} style={{ textDecoration: 'none', color: 'black' }}>
              <Typography variant='body1'>{user.name}</Typography>
            </NavLink>
            <Typography variant='caption'>{user.designation}</Typography>
          </div>
          <hr style={{ color: 'rgba(0, 0, 0, 0.5)' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography color='rgba(0, 0, 0, 0.5)' fontWeight='bold' variant='caption'>
                Profile viewers
              </Typography>
              <Typography color='rgba(0, 0, 0, 0.5)' fontWeight='bold' variant='caption'>
                Profile impressions
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight='bold' color='primary' variant='caption'>
                23
              </Typography>
              <Typography fontWeight='bold' color='primary' variant='caption'>
                45
              </Typography>
            </div>
          </div>

          <hr style={{ color: 'rgba(0, 0, 0, 0.5)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Typography variant='caption'>Unlock 4x more profile visits</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SquareIcon color='warning' fontSize='small' />
              <Typography fontWeight='bold' variant='caption'>
                Try premium for ₹0
              </Typography>
            </div>
          </div>

          <hr style={{ color: 'rgba(0, 0, 0, 0.5)' }} />

          <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <BookmarkIcon fontSize='20px' />
            <Typography fontWeight='bold' variant='caption'>Saved Items</Typography>
          </div>
        </Card>

        <Card variant='outlined' sx={{ marginTop: '10px' }}>
          <div style={{ padding: '10px' }}>
            <Typography variant='caption'>Recent</Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px' }}>
              <GroupIcon fontSize='5px' />
              <Typography fontWeight='bold' color='rgba(0, 0, 0, 0.5)' variant='caption'>
                Java Developers
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px' }}>
              <GroupIcon fontSize='5px' />
              <Typography fontWeight='bold' color='rgba(0, 0, 0, 0.5)' variant='caption'>
                Crack Interview
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px' }}>
              <GroupIcon fontSize='5px' />
              <Typography fontWeight='bold' color='rgba(0, 0, 0, 0.5)' variant='caption'>
                Python Developers
              </Typography>
            </div>
            <Typography variant='caption' color='primary' fontWeight='bold'>
              Groups
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px' }}>
              <GroupIcon fontSize='5px' />
              <Typography fontWeight='bold' color='rgba(0, 0, 0, 0.5)' variant='caption'>
                Java Developers
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px' }}>
              <GroupIcon fontSize='5px' />
              <Typography fontWeight='bold' color='rgba(0, 0, 0, 0.5)' variant='caption'>
                Crack Interview
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px' }}>
              <GroupIcon fontSize='5px' />
              <Typography fontWeight='bold' color='rgba(0, 0, 0, 0.5)' variant='caption'>
                Python Developers
              </Typography>
            </div>
            <Typography color='rgba(0, 0, 0, 0.5)' fontWeight='bold' variant='caption'>
              See all
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant='caption' color='primary' fontWeight='bold'>
                Events
              </Typography>
              <AddIcon fontSize='50px' />
            </div>
            <Typography variant='caption' color='primary' fontWeight='bold'>
              Followed Hashtags
            </Typography>
          </div>
          <hr style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
          <Typography padding='5px' textAlign='center' color='rgba(0, 0, 0, 0.5)' fontWeight='bold' variant='body1'>
            Discover more
          </Typography>
        </Card>
      </Grid>
    </StyledGrid>
  );
}