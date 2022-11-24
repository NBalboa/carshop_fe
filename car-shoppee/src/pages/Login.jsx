import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import exstyle from '../assets/css/exstyle.css'
import user from '../assets/img/user.png'
import Register from './Register'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onHandleLogin = async () => {
    try {
      const userCredentials = {
        email: email,
        password: password
      }
      await axios.post("http://localhost:3000/api/user/login", userCredentials, {responseType: "json"})
      .then(function(response) {
        alert(response.data.message)
        console.log(response.data.success)
        if(response.data.success){
          navigate("/")
        }
      })
    }catch(err){ 
      console.log(err)
    }
  }


  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={user} alt="profile" className="profile"/>
          </div>
        </div>
        <div>
          <h3>Login Page</h3>
          <div>
            {/* <img src={email} alt="email" className="email"/> */}
            <input type="text" placeholder="Email" className="name" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="second-input">
            {/* <img src={pass} alt="pass" className="email"/> */}
            <input type="password" placeholder="Password" className="name" value={password} onChange = {(e) => setPassword(e.target.value)}/>
          </div>
          <div className="login-button">
          <button onClick={onHandleLogin}>Login</button>
          </div>
            <div className="link">
              <p>Don't Have an Account? <Link to="/Register">Register Here</Link></p>
            </div>
        </div>
      </div>
      

    </div>
   </div>
 
  )
}

export default Login