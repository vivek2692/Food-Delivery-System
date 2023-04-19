import React, {useState,useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="header_center">
        <ul>
          <Link to="/" className="links">
            <li>Home</li>
          </Link>
          <Link to="/menu" className="links">
            <li>Menu</li>
          </Link>
          {location.pathname === "/" && (
            <>
              <a href="#popular_dishes_container" className="links">
                <li>Products</li>
              </a>
              <a href="#feedback_container" className="links">
                <li>Reviews</li>
              </a>
            </>
          )}
          <a href="#footer_container" className="links">
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
            <ShoppingBasketIcon style={{ height: "70px", width: "30px" }} />
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
      </div>
    </div>
  );
};

export default Header;
