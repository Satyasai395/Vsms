import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
// import validator from 'validator'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios  from "axios"
import "./Login.css";


const Login = () => {
  const navigate=useNavigate();
  const [userid,setUserid]=useState("");
  const [password, setPassword] = useState("");


  const proceedlogin=(e)=>{
    e.preventDefault();
    console.log("Logging in");
    console.log(userid,password)
    let logindata={userid,password};
    axios.post('http://127.0.0.1:8000/student/logindata/',logindata).then((resp)=>{
      console.log(resp.data.success);
      if  (resp.data.success===true){
        navigate('/stmain')

      }
      else{
        console.log("Invalid Username or Password")
        toast.error("check email once");
      }
      
    })
    
  }
  return (  
    <div className="background">
      <div className="login-box">
        <div className="wrapp">
          <h1>Login</h1>
          <form method="post" onSubmit={proceedlogin}>
          <div className="input-box">
            <input type="text" placeholder="UserID" required  onChange={e=>setUserid(e.target.value)}/>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)} />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            {/* <label>
              <input type="checkbox" />
              Remember Me
            </label> */}
            <a href="/" disabled>Forgot Password ?</a>
          </div>
          <button type="submit" className="btnn">
            Login
          </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
