import React from 'react'
import './Poster.css'
import { useState } from 'react'
import Ferrarits from "./images/Posters/Ferrari ts2.webp"
import Mclarents from "./images/Posters/Mclaren ts2.jpeg"
import Mercedts from "./images/Mercedes-Tshirts/Mercedes-Tshirt-3.jpeg"
import Ferrarits2 from "./images/Posters/Ferrari ts3.jpeg"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'




function Poster() {

  const navigate = useNavigate();


    const [images, setimages] = useState([{image:Ferrarits,Brand:"Ferrari"},{image:Mclarents,Brand:"Mclaren"},{image:Mercedts,Brand:"Mercedes"},{image:Ferrarits2,Brand:"Ferrari"}]);


  return (
    <div style={{display:"flex"}}>
      {
        images.map((item,id) => {
            return(
                <div className="main-ps-css" key={id}>
                <div className="poster-container" key={id}>
        <div className="ps-imgs">
            <img src={item.image} alt="" style={{height:"100%",width:"100%"}}/>
        </div>
        <div className="ps-content">
            {item.Brand}
        </div>
        <Link className='ps-btns' to={`/products/${item.Brand}`}>View Product</Link>
      </div>
      </div>
            )
        })
      }
    </div>
  )
}

export default Poster