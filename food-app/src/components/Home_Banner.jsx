import React from 'react'
import './Home_Banner.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Home_Banner = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/menu")
    }

  return (
    <div className='Home_Banner_container'>
        <img src="/BannerTrans.png" className='bg-trans' alt="" />
        <div className="banner_left">
            <p className='delivery_p'><img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" className='delivery_img' alt="" /> 24/7 Delivery</p>
            <h2>Choose healthy.</h2>
            <h2><span className='highlight'>Be strong</span>. Live</h2>
            <h2>long.</h2>

            <button className="btn-secondary search-btn" onClick={handleClick}>Search Products  <span>|</span> <SearchIcon/> </button>

            <div className="banner_icons">
                <FacebookRoundedIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <WhatsAppIcon/>
            </div>
        </div>
        <div className="banner_right">
            <div className='banner_right_img_div'>
                <img className='first-img' src="/Dish.png" alt="" />
                <img className='second-img' src="/Salad.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home_Banner