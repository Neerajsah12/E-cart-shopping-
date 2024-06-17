import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFER ON YOUR EMAIL</h1>
      <p>SUBSCRIBE NOW AND STAY UPDATED</p>
      <div>
        <input type="email" name="" id=""  placeholder='YOUR EMAIL ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter