import { useRef } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Grid } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import {Posting} from './Posting';
import { AddPost } from './AddPost';
import { useContext } from 'react';
import { Context } from './Context';
import { Media } from './Media';
import { Event } from './Event';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>•</Box>
);



export default function Posts() {

  const { posts, getPosts } = useContext(Context);

  const user = useSelector((state)=>state.Auth.user)

  function handleLikes(id) {

    let post = posts.filter((post) => post.id === id)[0]

    fetch('http://localhost:8080/updatePost/likes', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then((response) => {
        if (response.ok) {
          getPosts()
        }
      })
  }

  function handleComments(id) {

    let post = posts.filter((post) => post.id === id)[0]

    fetch('http://localhost:8080/updatePost/comments', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then((response) => {
        if (response.ok) {
          getPosts()
        }
      })

  }

  function handleReposts(id) {

    let post = posts.filter((post) => post.id === id)[0]

    fetch('http://localhost:8080/updatePost/reposts', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then((response) => {
        if (response.ok) {
          getPosts()
        }
      })

  }

  const posting = useRef()
  const addPost = useRef()
  const event = useRef()
  const media = useRef()
  const inputRef = useRef()

  function handleTextFieldFocus() {
    posting.current.showModal();
  }

  function handleAddPost() {
    addPost.current.showModal();
  }

  function handleMedia() {
    inputRef.current.click();
    media.current.showModal();
  }

  function handleEvent() {
    event.current.showModal();
  }

  return (
    <>
      <Media ref={media} back={false}/>
      <Event ref={event} back={false}/>
      <Posting ref={posting} />
      <AddPost ref={addPost} />
      <Grid container>
        <Grid item>
          <Card variant='outlined' sx={{ padding: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: "90%", gap: '10px', justifyContent: 'center' }}>
              <NavLink to={`/in/${`${user.emailId}`.split("@")[0]}`}><img src={user.icon} onClick={()=>localStorage.setItem("profile",user.emailId)} style={{ height: '55px', width: '55px', borderRadius: '50%' }} alt='icon'></img></NavLink>
              <Button onClick={handleTextFieldFocus} fullWidth color='inherit' sx={{ backgroundColor: '#f3f3f3', fontWeight: 'bold', justifyContent: 'start', borderRadius: '30px', height: '45px', textTransform: 'none', ":hover": { cursor: 'pointer' } }} variant='outlined'>Start a post, try writing with AI</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '5px 0px' }}>
              <Button color='success' onClick={handleAddPost} sx={{ textTransform: 'none' }} startIcon={<InsertPhotoIcon />}>Add Post</Button>
              <Button sx={{ textTransform: 'none' }} onClick={handleMedia} startIcon={<InsertPhotoIcon />}>Media</Button>
              <Button sx={{ color: '#c37d16', textTransform: 'none' }} onClick={handleEvent} startIcon={<EventIcon />}>Event</Button>
              <Button sx={{ color: '#e06847', textTransform: 'none' }} startIcon={<ArticleIcon />}>Write article</Button>
            </div>
            <input ref={inputRef} type='file' style={{display:'none'}}/>
          </Card>
          <div>
            {posts.map((post, index) => (
              <div key={index}>
                <Card sx={{ boxShadow: '0px 0px 1px 1px rgb(0,0,0,0.2)', margin: '10px 0px' }}>
                  <div style={{ display: 'flex', padding: '10px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2%', width: '80%' }}>
                      <NavLink to={`/in/${`${post.userEmailId}`.split("@")[0]}`}><img onClick={()=>localStorage.setItem("profile",post.userEmailId)} src={`${post.icon}`} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt='icon'></img></NavLink>
                      <div>
                        <NavLink style={{textDecoration:'none',color:'black'}} to={`/in/${`${post.userEmailId}`.split("@")[0]}`}><Typography sx={{textDecoration:'none'}} onClick={()=>localStorage.setItem("profile",post.userEmailId)} variant='h6'>{post.userName}</Typography></NavLink>
                        <Typography variant='body2'>{post.role}</Typography>
                      </div>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
                      <MoreHorizIcon />
                      <CloseIcon />
                    </div>
                  </div>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">{post.description}</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={`${post.image}`}
                    alt="Paella dish"
                  />

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                    <div>
                      <Typography variant='caption'>{post.likes} Likes</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant='caption'>{post.comments} comments</Typography>
                      {bull}
                      <Typography variant='caption'>{post.reposts} reposts</Typography>
                    </div>
                  </div>
                  <hr style={{ margin: '10px 10px' }} />
                  <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                    <Button onClick={() => handleLikes(post.id)} sx={{ color: 'black', textTransform: 'none' }} variant="text" startIcon={<ThumbUpOutlinedIcon />}>Like</Button>

                    <Button onClick={() => handleComments(post.id)} sx={{ color: 'black', textTransform: 'none' }} variant="text" startIcon={<CommentIcon />}>Comment</Button>

                    <Button onClick={() => handleReposts(post.id)} sx={{ color: 'black', textTransform: 'none' }} variant="text" startIcon={<RepeatIcon />}>Repost</Button>

                    <Button sx={{ color: 'black', textTransform: 'none' }} variant="text" startIcon={<SendIcon />}>Send</Button>

                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </>

  );
}