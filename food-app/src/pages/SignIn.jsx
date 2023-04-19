import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const obj = { email: email, password: password };

    await axios
      .post("http://localhost:5000/api/auth/sign-in", obj)
      .then((res) => {
        const data = res.data;
        console.log(data.data);
        localStorage.setItem("user",  JSON.stringify(data.data))
        if(data.data.isAdmin){
            navigate("/admin");
        }
        else{
            navigate("/");
        }
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  return (
    <div className="sign_in_container">
      <div className="form-container">
        <div className="form-left">
          <img src="/VickyFoods.png" alt="" className="form-logo" />
        </div>
        <hr />
        <div className="form-right">
          <h3 className="form-title">Sign In</h3>
          <div className="form-feilds">
            <input
              type="email"
              value={email}
              placeholder="Enter Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/sign-up" style={{ color: "black" }}>
            <p className="form-link">Don't have any account? Sign Up</p>
          </Link>
          <button className="btn-secondary" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
