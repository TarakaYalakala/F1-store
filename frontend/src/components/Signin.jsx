import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Signin() {

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [IsAdmin, setIsAdmin] = useState();
  const [support, setsupport] = useState(false);

  //  api messages //

  const [message, setmessage] = useState();
  const [errData, seterrData] = useState();


  // navigation 

  const navigate = useNavigate();


  const obj = {
    Name,
    Email,
    Password,
    IsAdmin
  }


  const handelSubmit = async (e) => {
    e.preventDefault();
      console.log(obj);
      axios.post("http://localhost:8000/signin",{Name,Email,Password,IsAdmin}).then((res) => {
        setmessage(res.data.Message);
        setsupport(true);
        setTimeout(() => {
          navigate("/login");
        }, 300);
      }).catch((err) => {
        seterrData(err.response.data.Error);
        setsupport(false);
      })
  }

  const handleAdmin = async (e) => {
    const value = e.target.value;
    console.log(value);
    console.log(typeof(value));
    if (value === '0') {
       setIsAdmin(0);
    }
    else if (value === '1') {
      setIsAdmin(1);
    }
  };


  return (
    <div className='brand-headers'>
      <div className="brand-sign">
      F-1 Store
      </div>
      <div className="header-signin">
        <div className="container-sign">
            <div className="inputs-sign">
              <div className="signin-tst">
                Sign in
              </div>
              <form onSubmit={handelSubmit}>
                <label>Name: </label>
                <input type="text" name="tsx" id="tsx" placeholder='Enter your name' className='name-sp'onChange={(e) => {setName(e.target.value)}} autoComplete='off'/>
                <br />
                <br />
                <label>Email: </label>
                <input type="email" name="mail" id="mail" placeholder='Enter your email' className='name-sp' onChange={(e) => {setEmail(e.target.value)}} autoComplete='off'/>
                {/* {support? <p></p>: <p style={{color:"red",fontSize:"12px"}}>{errData}</p>} */}
                <br />
                <br />
                {/* password */}
                <label>Password: </label>
                <input type="password" name="pass" id="pass" placeholder='Enter your password' className='name-sp' onChange={(e) => {setPassword(e.target.value)}} autoComplete='off'/>
                <br />
                <br />
                <select className='select-admin' onChange={handleAdmin}>
                  <option>Enter your role</option>
                  <option value="0" >Coustmer</option>
                  <option value="1" >Admin</option>
                </select>
                <button type='submit' className='button-sp'>Sign in</button>
              </form>
              <Link to="/">Already have account?</Link>
            </div>
            {support ? <div className='msg-bar' style={{fontSize:"13px", color:"green"}}>{message}</div>: <p style={{color:"red",fontSize:"16px"}}>{errData}</p> }
        </div>
      </div>
    </div>
  )
}

export default Signin
