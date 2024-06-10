import React from 'react'
import './news.css'
const News = () => {
  return (
    <div>
      <div className='news'>
        <div className='newsHeader'>
          <h3>LinkedIn News</h3>
          <h6>Top stories</h6>
        </div>
        <div className='newsItems'>
          <div className='newsItem'>
            <h1>Elections 2024: NDA retains majority</h1>
            <div>
              <p>Top news</p>
              <p>34,895 readers</p>
            </div>
          </div>
          <div className='newsItem'>
            <h1>Freshers in demand at these firms</h1>
            <div>
              <p>2d ago</p>
              <p>6,633 readers</p>
            </div>
          </div>
          <div className='newsItem'>
            <h1>Startup investors shift strategy</h1>
            <div>
              <p>2d ago</p>
              <p>2,895 readers</p>
            </div>
          </div>
          <div className='newsItem'>
            <h1>Banks battle rising fraud</h1>
            <div>
              <p>3d ago</p>
              <p>2,605 readers</p>
            </div>
          </div>
          <div className='newsItem'>
            <h1>Consulting firms eye retail</h1>
            <div>
              <p>4d ago</p>
              <p>4,896 readers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News