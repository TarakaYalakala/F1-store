import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import './SingleProduct.css'
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import Footer from './Footer';
import {addProducts} from "./Slice"
import { useSelector, useDispatch } from 'react-redux'


function SingleProduct() {

  const CartProduct = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();
  const [data, setdata] = useState([]);


  useEffect(() => {
    const api = async () => {
      axios.get(`http://localhost:8000/product/${params.brand}/${params.id}`).then((res) => {
        setdata(res.data.product);
      }).catch((err) => {
        console.log(err);
      })
    }
    api()
  }, [])

  const handelAddItems = (title,description,image,price) => {
    const imageBase64 = Buffer.from(image).toString('base64');
    dispatch(addProducts({Title: title, Description: description, Image: imageBase64, Price: price}));
    console.log(CartProduct);
  }


  return (
    <div>
      <Navbar/>
      <div className="single-product">
        <div className="icons-holders">
        <div className="left-icon-rs" onClick={() => {navigate(`/products/${params.brand}`)}}>
        <i className="fa-solid fa-arrow-left fa-xl" style={{color:"white"}}></i>
        </div>
          <div className="right-icon-rs" style={{cursor:"none"}}>
          <i className="fa-solid fa-arrow-right fa-xl" style={{color:"white"}}></i>
          </div>
        </div>

        {data.map((item,id) => {
           return( <div key={id} className='content-main-rs'>
            <div className="product-img-rs">
              <img src={`data:image/jpeg;base64,${Buffer.from(item.Photo.data.data).toString('base64')}`} alt="" style={{height:"100%",width:"100%"}}/>
           </div>
           <br />
           <div className="addcart-btns" style={{display:"flex",gap:"30px",marginLeft:"170px",marginTop:"10px"}}>
            <div className="cart-btn">
              <span  className="d-inline-block" data-toggle="popover" data-content="Disabled popover">
              <button className='cart-rs-btn' onClick={() => {handelAddItems(item.Title, item.Description, item.Photo.data.data, item.Price)}}><i className="fa-solid fa-cart-shopping fa-bounce fa-xl" style={{color:"#254888"}}></i>Add To Cart</button>
              </span>
            </div>
            <div className="buy">
              <button className='cart-buy-rs'><i className="fa-solid fa-angles-right fa-beat fa-xl" style={{color: "#ffffff",gap:"10px"}}></i>Buy Now</button>
            </div>
           </div>
           <br />
           <br />
           <div className="cts-container">
           <div className="title-rs">{item.Title}</div>
            <div className='brand-rs'>Brand: {item.Brand}</div>
            <div className="description-rs">{item.Description}</div>
            <div className="ratings-rs">
              <div className="rate">
                {item.Rating}
              </div>
              <div className="star-rs">
              <i className="fa-solid fa-star" style={{color:"white"}}></i>
              </div>
            </div>
            <div className="price-tags">
               ₹ {item.Price}
            </div>
            <div className="viewmore">
              <a href={`/products/${params.brand}`}>View more </a>
            </div>
           </div>
           </div>
          
             
           )
        }) }
        <br />
        <br />
      </div>
      <Footer/>
    </div>
  )
}

export default SingleProduct
