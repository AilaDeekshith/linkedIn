import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import img from './images/thought.jpg'
import img1 from './images/Dhoni.webp'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import { Button, Grid, TextField } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

export default function Posts() {

  return (
  
      <Grid container>
        <Grid item>
        <Card variant='outlined' sx={{padding:'10px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <img src={img1} style={{height:'80px',width:'80px',borderRadius:'50%'}}></img>
            <TextField sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
            height:'50px'
          },
          width:'500px',
          }}  placeholder='Start a post, try writing with AI' variant="outlined"/>
          </div>

      <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',padding:'5px 0px'}}>
        <Button sx={{textTransform:'none'}} startIcon={<InsertPhotoIcon />}>Media</Button>
        <Button sx={{color:'#c37d16',textTransform:'none'}} startIcon={<EventIcon />}>Event</Button>
        <Button sx={{color:'#e06847',textTransform:'none'}} startIcon={<ArticleIcon />}>Write article</Button>
      </div>
    </Card>
      <Card sx={{boxShadow:'0px 0px 1px 1px rgb(0,0,0,0.2)',margin:'10px 0px'}}>
      <div style={{display:'flex',alignItems:'center',padding:'10px'}}>
        <img src={img1} style={{height:'80px',width:'80px',borderRadius:'50%'}}></img>
      <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
      <div style={{marginLeft:'auto',display:'flex',gap:'15px'}}>
          <MoreHorizIcon/>
          <CloseIcon/>
      </div>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={img}
        alt="Paella dish"
      />
      <hr style={{margin:'10px 10px'}}/>
      <CardActions sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      
        <IconButton>
        <Button variant="text" startIcon={<ThumbUpOutlinedIcon />}>Like</Button>
        </IconButton>
        <IconButton>
        <Button variant="text" startIcon={<CommentIcon />}>Comment</Button>
        </IconButton>
        <IconButton>
        <Button variant="text" startIcon={<RepeatIcon />}>Repost</Button>
        </IconButton>
        <IconButton>
        <Button variant="text" startIcon={<SendIcon />}>Send</Button>
        </IconButton>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
  );
}