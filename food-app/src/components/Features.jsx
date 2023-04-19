import React from 'react'
import './Features.css'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Features = () => {
  return (
    <div className="features_container">
        <div className="features_left">
            <div className="features_fruits">
                <img src="/ChefBG.png" className='chef-bg' alt="" />
                <img src="/Chef1.png" className='chef' alt="" />
            </div>
        </div>
        <div className="features_right">
            <h2 className='features_head'>Nothing brings people together like good food.</h2>

            <div className="features">
                <div className="features_box">
                    <div className="features_box_left">
                        <DeliveryDiningIcon/>
                    </div>
                    <div className="features_box_right">
                        <h2 className="feature_title">24 / 7 Free Delivery</h2>
                        <p className="feature_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam est ex fugiat optio.</p>
                    </div>
                </div>

                <div className="features_box">
                    <div className="features_box_left">
                        <LocalDiningIcon/>
                    </div>
                    <div className="features_box_right">
                        <h2 className="feature_title">Healthy Foods</h2>
                        <p className="feature_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur modi ut consequuntur quod esse error</p>
                    </div>
                </div>

                <div className="features_box">
                    <div className="features_box_left">
                        <FastfoodIcon/>
                    </div>
                    <div className="features_box_right">
                        <h2 className="feature_title">Dine In</h2>
                        <p className="feature_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, labore!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features