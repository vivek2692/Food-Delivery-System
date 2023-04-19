import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async() => {
    const obj = {
        name: name,
        email: email,
        password: password,
        address: address
    };

    await axios.post("http://localhost:5000/api/auth/sign-up",obj)
    .then((res) => {
        const data = res.data;
        console.log(data);
        alert(data.msg);
        navigate("/sign-in");
    })
    .catch((err) => {
        alert(err.response.data.msg);
    })
  }

  return (
    <div className="sign_in_container">
        <div className="form-container">
            <div className="form-left">
                <img src="/VickyFoods.png" alt="" className='form-logo'/>
            </div>
            <hr />
            <div className="form-right">
                <h3 className='form-title'>Sign Up</h3>
                <div className="form-feilds">
                    <input type="text" value={name} placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} />
                    <input type="email" value={email} placeholder='Enter Your E-mail' onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <textarea value={address} placeholder='Enter Your Address' onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <Link to="/sign-in" style={{color: "black"}}><p className='form-link'>Already have an account? Sign In</p></Link>
                <button className='btn-secondary' onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp