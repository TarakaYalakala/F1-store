import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {


  const handelToken = () => {
    const token = localStorage.removeItem("authToken");
        console.log("Token is deleted")
  }




  return (
    <div>
      <nav className='main-nav'>
        <div className="logo">
             <span className='f1-series'>F1</span>-Store
        </div>
        <i className="fa-fa-bars">

        </i>
        <ul>
            <li className='main-routes'>
                <li>
                <NavLink to="/home" className="active">Home</NavLink>
                </li>
                <li>
                <NavLink to="/products/:brand" className="active">Products</NavLink>
                </li>
                <li>
                <NavLink to="/cart" className="active">
                <i className="fa-solid fa-cart-shopping fa-xl fa-shake"></i>
                </NavLink>
                </li>
                <li>
                <NavLink to="/login" className="active" onClick={handelToken}>Logout <i className="fa-solid fa-right-from-bracket " style={{color:"#f5f5f5"}}></i></NavLink>
                </li>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

