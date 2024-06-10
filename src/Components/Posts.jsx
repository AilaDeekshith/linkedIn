import React from 'react'
import './post.css';
import img from './images/Dhoni.webp'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import postImg from './images/thought.jpg';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Button, TextField } from '@mui/material';

const Posts = () => {
  return (
    <div>
      <div className='postingArea' style={{marginTop:'10px'}}>
        <div className='Top'>
          <img src={img} alt='icon'></img>
          <TextField sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
            height:'50px'
          },
          width:'500px',
          }}  placeholder='Start a post, try writing with AI' variant="outlined"/>
        </div>
        <div className='bottom'>
          <Button sx={{textTransform:'none',color:'black'}}  variant="text" startIcon={<PhotoSizeSelectActualIcon/>}>Media</Button>
          <Button sx={{textTransform:'none'}}  variant="text" startIcon={<CalendarMonthIcon/>}>Event</Button>
          <Button sx={{textTransform:'none'}}  variant="text" startIcon={<ArticleIcon/>}>Write article</Button>
        </div>
      </div>
      <div className='postArea'>
      <div className='posts'>
        <div className='postTop'>
          <img src={img} alt='icon'></img>
          <div>
           <p>Name</p>
           <p>info</p>
          </div>
        </div>
        <div className='postTopIcons'>
        <MoreHorizIcon/>
        <CloseIcon sx={{marginTop:'5px'}} fontSize='20px'/>
        </div>
      </div>
      <div>
        <p>Content</p>
      </div>
      <img src={postImg}></img>
      <hr style={{marginTop:'10px'}}/>
      <div className='postBottom'>
      <Button sx={{textTransform:'none'}}  variant="text" startIcon={<ThumbUpOffAltOutlinedIcon/>}>Like</Button>
      <Button sx={{textTransform:'none'}}  variant="text" startIcon={<CommentRoundedIcon/>}>Comment</Button>
      <Button sx={{textTransform:'none'}}  variant="text" startIcon={<RepeatRoundedIcon/>}>Repost</Button>  
      <Button sx={{textTransform:'none'}}  variant="text" startIcon={<SendRoundedIcon/>}>send</Button>
      </div>

      </div>
      
    </div>
  )
}

export default Posts