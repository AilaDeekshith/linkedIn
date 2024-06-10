import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import img1 from './images/Dhoni.webp'
const Self = () => {
  return (
    <div>
      <div className='self' style={{marginTop:'10px'}}>
          <div className='img'>
          <img src={img1} alt='Dhoni'></img>
          </div>
          <div className='info'>
            <h1>AILA DEEKSHITH</h1>
            <p>Intern @ Techsophy</p>
          </div>
        <hr/>
        <div className='views'>
          <div className='terms'>
            <p>Profile viewers</p>
            <p>Post impressions</p>
          </div>
          <div className='values'>
            <p>35</p>
            <p>16</p>
          </div>
        </div>
        <hr/>
        <div className='premium'>
          <p>Access exclusive tools & insights</p>
          <p>Network smarter with Premium</p>
        </div>
        <hr/>
        <div className='savedItems'>
          <BookmarkIcon/>
          <p>Saved items</p>
        </div>

      </div>
    </div>
    
  )
}

export default Self