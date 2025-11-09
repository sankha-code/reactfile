import React from 'react'
import BookMark from 'lucide-react';
const Card = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1761295133736-8c68192dd522?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" />
            <button>Save <Bookmark /></button>
          </div>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbau,India</p>
          </div>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card;