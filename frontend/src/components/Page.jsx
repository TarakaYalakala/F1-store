import React from 'react'
import { useFetchers, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import "./Page.css"
import Footer from "./Footer"
import axios from "axios"
import ts from "../components/images/Mercedes-Tshirts/Mercedes-Tshirt-2.jpeg"
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import Skeliton from './Skeliton';


function Page() {

  
  const params = useParams();
  const [product, setproduct] = useState([]);
  const [support, setsupport] = useState(false);
  const [ske, setske] = useState(false);

  useEffect(() => {
    const api = async() => {
      setTimeout(() => {
        setske(true);
      }, 2000);
    }
    api();
  }, [])
  


  const handelRadio = async (brand) => {
    axios.post(`http://localhost:8000/product/${brand}`).then((res) => {
      setproduct(res.data.Data);
      setsupport(true);
    }).catch((err) => { console.log(err) });
  }



  return (
    <div>
      <Navbar />
      <p>Sort by Brand: {JSON.stringify(params.brand)}</p>
      <div className="Store-container">
        <div className="store-left-nav">
          <nav className='store-left'>
            <div className="left-ctr">
              <div className="left-nav-input">
                <input type="radio" name="sass" id="Mercedes" onClick={() => { handelRadio("Mercedes") }} />
                <label>Mercedes</label>
              </div>
              <div className="left-nav-input">
                <input type="radio" name="sass" id="Ferarri" onClick={() => { handelRadio("Ferarri") }} />
                <label>Ferrari</label>
              </div>
              <div className="left-nav-input">
                <input type="radio" name="sass" id="Haas" onClick={() => { handelRadio("Haas") }} />
                <label>Haas</label>
              </div>
              <div className="left-nav-input">
                <input type="radio" name="sass" id="Redbull" onClick={() => { handelRadio("Redbull") }} />
                <label>Redbull</label>
              </div>
              <div className="left-nav-input">
                <input type="radio" name="sass" id="Sauber" onClick={() => { handelRadio("Sauber") }} />
                <label>Sauber</label>
              </div>
              <div className="left-nav-input">
                <input type="radio" name="sass" id="Alpine" onClick={() => { handelRadio("Alpine") }} />
                <label>Alpine</label>
              </div>
              <div className="left-nav-input">
                <input type="radio" name="sass" id="Mclaren" onClick={() => { handelRadio("Mclaren") }} />
                <label>McLaren</label>
              </div>
            </div>
          </nav>
        </div>
        {/* Right - side part */}
        <div className="right-container-store">
          <div className="box-right">
            <div className="right-products">
             { support ? product.map((item,id) => {
              return(
               <div className='sss' key={id}>
                <div className="product-containers">
                <div className="product-image">
                  <img src={`data:image/jpeg;base64,${Buffer.from(item.Photo.data.data).toString('base64')}`} alt="T-shirt" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className="product-info">
                  <div>{item.Brand}</div>
                  <div>Price: {item.Price}$</div>
                  <div>Ratings: {item.Rating}</div>
                  <a href={`/products/${item.Brand}/${item._id}`} className='prd-anc'>View Product</a>
                </div>
              </div>
               </div>
                  
              )
             }): ske ? <div className="product-containers">
             <div className="product-image">
               <img src={ts} alt="T-shirt" style={{ height: "100%", width: "100%" }} />
             </div>
             <div className="product-info">
               <div>Mercedes & Puma</div>
               <div>Price: 55$</div>
               <div>Ratings: 4</div>
               <a href="/products" className='prd-anc'>View Product</a>
             </div>
           </div>:<Skeliton/>}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Page



{/* 
  <div className="product-containers">
                <div className="product-image">
                  <img src={ts} alt="T-shirt" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className="product-info">
                  <div>Mercedes & Puma</div>
                  <div>Price: 55$</div>
                  <div>Ratings: 4</div>
                  <a href="/products" className='prd-anc'>View Product</a>
                </div>
              </div> */}