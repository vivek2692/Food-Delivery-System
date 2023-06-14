import React, {useState,useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  // const token = useSelector((state) => state.customer?.token);
  console.log(user);

  const count = JSON.parse(localStorage.getItem("cart")).length;

  // const [count, setCount] = useState(0); 

  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCount(storedCartItems.length);
  // },[]);

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const handleLogOut = () => {
    // dispatch(logout());
    localStorage.removeItem("user")
    navigate('/');
  }

  return (
    <div className="header_container">
      <div className="header_left">
        <img src="/VickyFoods.png" alt="LOGO" className="logo_img" />
      </div>
      <div className="header_center" style={{right: menuOpen ? "0%" : "-30%"}}>
        <CloseIcon className="closeBtn" onClick={() => setMenuOpen(false)}/>
        <ul>
          <Link to="/" className="links" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>
          <Link to="/menu" className="links" onClick={() => setMenuOpen(false)}>
            <li>Menu</li>
          </Link>
          {location.pathname === "/" && (
            <>
              <a href="#popular_dishes_container" className="links" onClick={() => setMenuOpen(false)}>
                <li>Products</li>
              </a>
              <a href="#feedback_container" className="links" onClick={() => setMenuOpen(false)}>
                <li>Reviews</li>
              </a>
            </>
          )}
          <a href="#footer_container" className="links" onClick={() => setMenuOpen(false)}>
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
      <div className="header_right">
        <Link to="/cart" style={{ color: "black" }}>
          <div className="cart-icon">
            <div className={count > 0 ? "circle" : "circle-hidden"}>
              {count}
            </div>
            <ShoppingBasketIcon className="cartBtn" style={{ height: "70px", width: "30px" }} />
          </div>
        </Link>
        {!user && (
          <>
            <button className="btn-primary" onClick={handleSignIn}>
              Sign In
            </button>
            <button className="btn-secondary" onClick={handleSignUp}>
              Sign Up
            </button>
          </> 
        )}
        {
          user && <button className="btn-secondary" onClick={handleLogOut}>
          Log Out 
        </button>
        }
        <MenuIcon className="menuBtn" onClick={() => setMenuOpen(true)}/>
      </div>
    </div>
  );
};

export default Header;
