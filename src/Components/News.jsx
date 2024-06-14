import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export default function News() {
  return (
    <Grid container>
      <Grid item>
      <Card variant='outlined'>
      <CardContent>
        <Typography sx={{fontWeight:'bold'}} variant='h6'>LinkedIn News</Typography>
        <Typography marginTop='10px' color='rgb(0,0,0,0.7)' fontWeight='bold' variant='body1'>Top stories</Typography>
      </CardContent>
      <CardContent>
        <Typography sx={{fontWeight:'bold'}} variant='body2'>Elections 2024 : NDA takes charge</Typography>
        <Typography sx={{color:'rgb(0,0,0,0.5)'}} variant='caption'>Top News 34,234 readers</Typography>
        <Typography sx={{fontWeight:'bold'}} variant='body2'>Freshers in demand at this firms</Typography>
        <Typography sx={{color:'rgb(0,0,0,0.5)'}} variant='caption'>1d ago 56,234 readers</Typography>
        <Typography sx={{fontWeight:'bold'}} variant='body2'>Startup investors shift strategy</Typography>
        <Typography sx={{color:'rgb(0,0,0,0.5)'}} variant='caption'>1d ago 67242 readers</Typography>
        <Typography sx={{fontWeight:'bold'}} variant='body1'>Banks battle rising fund</Typography>
        <Typography sx={{color:'rgb(0,0,0,0.5)'}} variant='caption'>1d ago 78,342 readers</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show More</Button>
      </CardActions>
      </Card>
      </Grid>
    </Grid>
      
  );
}
