import React from 'react'
import './Feedback.css'
import StarRateIcon from '@mui/icons-material/StarRate';

const Feedback = () => {
  return (
    <div className='feedback_container' id="feedback_container">
        <div className="feedback_left">
            <h1 className="feedback_title">
                What our customers say about us?
            </h1>
            <p className="feedback_desc">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, tempore laudantium iste porro recusandae esse. Recusandae ut molestiae aliquid autem Molestiae architecto odio quibusdam inventore et cum eius tempore soluta"
            </p>

            <div className="feedback_customer">
                <div className="customer_left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFX5HiepzWUZcv-h6M6MvyfzXvR5BbcxHZQ&usqp=CAU" alt="" />
                </div>
                <div className="customer_right">
                    <p className="customer_name">Sanjeev Kapoor</p>
                    <div className="customer_ratings">
                        <StarRateIcon sx={{color: "orange"}}/>
                        <StarRateIcon sx={{color: "orange"}}/>
                        <StarRateIcon sx={{color: "orange"}}/>
                        <StarRateIcon sx={{color: "orange"}}/>
                        <StarRateIcon sx={{color: "orange"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="feedback_right">
            <img src="/FeedbackImg.png" alt="" />
        </div>
    </div>
  )
}

export default Feedback