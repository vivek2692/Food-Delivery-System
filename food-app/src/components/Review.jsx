import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <div className='review_container'>
        <div className="main_review_form">
            <img src="/Chef2.png" alt="" />
            <div className="review_form">
                <input type="text" placeholder='Enter Your Name' name='name' />
                <input type="email" placeholder='Enter Your Email' name='email' />
                <textarea placeholder='Enter Your Message' name='msg' />
                <button className='btn-secondary review-btn'>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Review