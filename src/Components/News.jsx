
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import news from './news'

export default function News() {
  

  return (
    <Grid container>
      <Grid item width='100%'>
      <Card variant='outlined'>
      <CardContent>
        <Typography sx={{fontWeight:'bold'}} variant='h6'>LinkedIn News</Typography>
        <Typography marginTop='10px' color='rgb(0,0,0,0.7)' fontWeight='bold' variant='body1'>Top stories</Typography>
      </CardContent>
      <CardContent>
      {news.map((item,index)=>(
        <div key={index}>
            <Typography sx={{fontWeight:'bold'}} variant='body2'>{item.headlines}</Typography>
            <Typography sx={{color:'rgb(0,0,0,0.5)'}} variant='caption'>{item.caption}</Typography>
        </div>
      ))}
      </CardContent>
      </Card>
      </Grid>
    </Grid>
      
  );
}
