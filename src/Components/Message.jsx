import { Typography } from '@mui/material';

export const Message = ({post}) => {

  return (
    <div style={{padding:'3%'}}>
        <div style={{display:'flex',gap:'5%'}}>
            <img style={{height:'50px',width:'50px',borderRadius:'50%'}} src={`${post.icon}`} alt='icon'></img>
            <div>
                <Typography fontWeight='bold' variant='body1'>{post.userName}</Typography>
                <Typography variant='body2'>{post.role}</Typography>
            </div>
        </div>
        <div style={{padding:'2%'}}>
            <Typography variant='body2'>{post.description}</Typography>
        </div>
    </div>
  )
}