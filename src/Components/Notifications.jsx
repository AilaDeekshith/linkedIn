import { Button, Card, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Ad } from './Ad';
import { Context } from './Context';

export const Notifications = () => {

  const {posts} = useContext(Context)

  return (
    <div  style={{marginTop:"30px"}}>
        <Grid container sx={{display:'flex',justifyContent:'center',gap:'2%'}}>
            <Grid item lg={2} xs={11}>
                <Card variant='outlined' sx={{padding:'10px',borderRadius:'10px'}}>
                    <Typography fontWeight='bold' variant='body1'>Manage your</Typography>
                    <Typography fontWeight='bold' variant='body1'> notifications</Typography>
                    <Typography color='primary' fontWeight='bold' variant='body2'>view settings</Typography>
                </Card>
            </Grid>
            <Grid item lg={4} xs={11}>
                <Card variant='outlined' style={{display:'flex',padding:'20px',gap:'10px'}}>
                    <Button color='success' variant="contained" sx={{borderRadius:'25px'}}>All</Button>
                    <Button variant="outlined" color='inherit' sx={{borderRadius:'25px',textTransform:'none',fontWeight:'bold',fontSize:'15px'}}>My posts</Button>
                    <Button variant="outlined" color='inherit' sx={{borderRadius:'25px',textTransform:'none',fontWeight:'bold',fontSize:'15px'}}>Mentions</Button>
                </Card>
                <Card variant='outlined' style={{marginTop:'10px'}}>                
                {posts.map((post,index)=>(
                    <div key={index}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{padding:'20px',display:'flex',alignItems:'center',gap:'10px'}}>
                                <img src={`${post.icon}`} alt='dhoni' style={{height:'50px',width:'50px',borderRadius:'50%'}}></img>
                                <Typography variant='body2' textAlign='justify'>{`${`${post.description}`.slice(0,60)}...`}</Typography>
                            </div>
                            <div style={{display:'flex',alignItems:"center",flexDirection:'column',padding:'20px'}}>
                                <Typography variant='caption'>2h</Typography>
                                <MoreHorizIcon/>
                            </div>
                        </div>
                        {index!==posts.length-1?<hr style={{margin:0,padding:0}}/>:undefined}
                    </div>
                ))}
                </Card>
            </Grid>
            <Grid item lg={2} xs={11}>
                <Ad/>
            </Grid>
        </Grid>
    </div>
  )
}