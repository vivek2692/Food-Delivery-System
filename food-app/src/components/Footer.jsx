import React from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer_container" id="footer_container">
      <div className="footer_top">
        <div className="footer1">
          <img src="/VickyFoods.png" alt="LOGO" className="logo_img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            repellendus dolore laudantium.
          </p>
          <div className="details">
            <div className="detail">
              <EmailIcon />
              <p className="detail_desc">vivek@gmail.com</p>
            </div>
            <div className="detail">
              <CallIcon />
              <p className="detail_desc">+911234567890</p>
            </div>
            <div className="detail">
              <LocationOnIcon />
              <p className="detail_desc">Antilia, Mumbai</p>
            </div>
          </div>
        </div>
        <div className="footer2">
          <h2 className="footer_title">Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Foods</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer3">
          <h2 className="footer_title">Support</h2>
          <ul>
            <li>Healthy Foods</li>
            <li>Home Delivery</li>
            <li>Customer Services</li>
            <li>Best Pricing</li>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
        <div className="footer4">
          <h2 className="footer_title">Get News & Update</h2>
          <div className="footer_input">
            <input type="text" placeholder="@Enter Your Email" />
            <button className="btn-secondary">Subscribe</button>
          </div>
          <h3 className="footer_sub_title">Follow Us</h3>
          <div className="icons">
            <FacebookRoundedIcon className="icon" />
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
            <WhatsAppIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <hr />
        <p className="center">Created By Vivek Chauhan</p>
      </div>
    </div>
  );
};

export default Footer;
