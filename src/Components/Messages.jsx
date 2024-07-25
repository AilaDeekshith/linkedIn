import { Button, Card, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useState } from 'react'
import { useContext } from 'react';
import { Context } from './Context';
import { Message } from './Message';
import { Ad } from './Ad';

export const Messages = () => {

  const {posts,loading} = useContext(Context);
  
  const buttons = ['Unread','My Connections','In Mail','Starred']


  const [messageId,setMessageId] = useState(0);

  return (
    <Grid container padding='10px' marginTop='2%' sx={{display:'flex',gap:'2%',justifyContent:'center'}}>
      <Grid item lg={6} md={8} sm={10} xs={10}>
        <Card variant='outlined'>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'200px',padding:'10px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <Typography fontWeight='bold' variant='body1'>Messaging</Typography>
            <TextField  sx={{'& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'}},backgroundColor:'#edf3f8',borderRadius:'10px'}}  size='small' placeholder='Search messages' variant='outlined' InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
            }}/>
            </div>
            <div style={{display:'flex',gap:'10px'}}>
                <MoreHorizIcon/>
                <ModeEditOutlineOutlinedIcon/>
            </div>
          </div>
          <hr/>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px'}}>
          <Button sx={{borderRadius:'25px',textTransform:'none',fontWeight:'bold'}} color='success' variant="contained">Focused</Button>
          <div style={{borderLeft:'1px solid rgb(0,0,0,0.5)',height:'30px',placeItems:'center'}}></div>
          {buttons.map((button,index)=>(
            <Button key={index} sx={{borderRadius:'25px',textTransform:'none',fontWeight:'bold'}} color='inherit' variant="outlined">{button}</Button>
          ))}
          </div>
          <hr style={{color:'rgb(0,0,0,0.5)',margin:0,padding:0}}/>
          <div style={{display:'flex'}}>
          <Grid item sx={{width:'45%',height:'70vh',overflow:'scroll'}}>
            {posts.map((post,index)=>(
              <div key={index} onClick={()=>setMessageId(index)}>
                <div style={{padding:'4%',display:'flex',gap:'10px'}}>
                  <img src={`${post.icon}`} alt='icon' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img>
                    <div>
                      <Typography>{post.userName}</Typography>
                      <Typography textAlign='justify' variant='caption'>{`${`${post.description}`.slice(0,50)}...`}</Typography>
                    </div>
                    <Typography marginLeft='auto' variant='caption'>1h</Typography>
                </div>
                {index !== posts.length-1 ? <hr style={{margin:0,padding:0}}/> : undefined}
              </div>
            ))}
          </Grid>
          <Grid item textAlign='justify' maxWidth='55%'>
            {loading ? undefined : <Message post={posts[messageId]}/>}
          </Grid>
          </div>
        </Card>
      </Grid>
      <Grid item lg={2} md={3} sm={10} xs={10}>
        <Ad/>
      </Grid>  
    </Grid>
  )
}