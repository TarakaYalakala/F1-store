import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {

  const navigate = useNavigate();


    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    // 

    const [token, settoken] = useState();
    const [email, setemail] = useState();
    const [Message, setMessage] = useState();
    const [Name, setName] = useState();
    const [id, setid] = useState();

const tokenObj = {
  token: token,
  email: email,
  Message: Message,
  Name: Name,
  id: id
}

    const auth = localStorage.setItem("authToken", token);


    const handelSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/login", {Email,Password}).then((res) => {
          console.log(res.data); 
          settoken(res.data.token);
          setemail(res.data.Email);
          setMessage(res.data.Message);
          setName(res.data.Name);
          setid(res.data.id);
          if (res.data.token) {
            setTimeout(() => {
              navigate("/home");
            }, 200)
          }
          
        }).catch((err) => {
           console.log(err);
        })
       
    }



  return (
    <div className='header'>
       <div className="brand">
         F1-Store
        </div>
      <div className="body">
        <div className="main-continer">
          <div className="login">
            <div className="lg-in">
              Login
            </div>
            <div className="inputs">
              <div className="tests">
                <form onSubmit={handelSubmit}>
                <label className='email'>Email : </label>
                <input type="email" name="txt" id="txt" placeholder='Enter your name' className='input-txt' onChange={(e) => {setEmail(e.target.value)}} autoComplete='off'/>
                <br />
                <br />
                <label className='email'>Password:</label>
                <input type="password" name="pass" id="pass" placeholder='Enter your password' className='input-pass' onChange={(e) => {setPassword(e.target.value)}} autoComplete='off'/>
                <br />
                <br />
                <button className="glow-button" type='submit'>Submit</button>
                </form>
                <Link to='/signin' className="register">
                  Create a account 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
