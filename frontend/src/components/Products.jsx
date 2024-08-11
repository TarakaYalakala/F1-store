import React from 'react'
import Navbar from './Navbar'
import './Products.css'
import Mclaren from "../components/images/Mclaren.png"
import Mercedes from '../components/images/Mercedes-symbol.jpeg'
import Sauber from '../components/images/Sauber-symbol.jpg'
import Ferrari from '../components/images/Ferrari-symbol.png'
import Alpine from "../components/images/Alpine-symbol.jpeg"
import Redbull from "../components/images/Redbull-symbol.jpeg"
import Hass from "../components/images/Hass-symbol.png"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Poster from './Poster'


function Products() {

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({duration:700});
   
  }, [])


  const handelBrand = (brand) => {
    console.log(brand);
    navigate(`/products/${brand}`);
  }

  return (
    <div>
     <Navbar/>
      <div className="main-headers">
        <div className='head'>
        <div className="left-content">
            <div className="left-main">
            <p className='span-1'>Lowest Prices</p>
            <p className='span-2'>Best Quality Shopping</p>
            <span className='span-3'><i className="fa-solid fa-truck fa-xl" style={{color: "blue"}}></i>Free Delivery | <i className="fa-solid fa-person-walking-arrow-loop-left fa-xl" style={{color: "blue"}}></i> Easy return | <i className="fa-solid fa-wallet fa-xl" style={{color: "#2356af"}}></i> Cash on Delivery</span>
            </div>
          </div> 
        </div>
        {/* 2- part */}
        <div className="second-part">
          <h2 className="second-heading">
            Select By Brands
          </h2>

          {/* Cards */}

          <div className="brands">

                      {/* Mclaren */}

            <div className="brand-holder" data-aos="fade-up" onClick={() => {handelBrand("Mclaren")}} >
              <div className="brand-img">
              <img src={Mclaren} alt="Mclaren" style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="brand-name">
                McLaren
              </div>
            </div>

            {/* Mercedes */}

            <div className="brand-holder" data-aos="fade-up" onClick={() => {handelBrand("Mercedes")}}>
              <div className="brand-img">
              <img src={Mercedes} alt="Mercedes" style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="brand-name">
              Mercedes
              </div>
            </div>

            {/* Hass */}

            <div className="brand-holder" data-aos="fade-up" onClick={() => {handelBrand("Haas")}}>
              <div className="brand-img">
              <img src={Hass} alt="Hass" style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="brand-name">
               Hass
              </div>
            </div>

            {/* Alpine */}

            <div className="brand-holder" data-aos="fade-up" onClick={() => {handelBrand("Alpine")}}>
              <div className="brand-img">
              <img src={Alpine} alt="Alpine" style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="brand-name">
              Alpine
              </div>
            </div>

            {/* Sauber */}


            <div className="brand-holder" data-aos="fade-up"  onClick={() => {handelBrand("Sauber")}}>
              <div className="brand-img">
              <img src={Sauber} alt="Sauber" style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="brand-name">
              Sauber
              </div>
            </div>

            {/* Ferrari */}


            <div className="brand-holder" data-aos="fade-up" onClick={() => {handelBrand("Ferrari")}}>
              <div className="brand-img">
              <img src={Ferrari} alt="Ferrari" style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="brand-name">
              Ferrari
              </div>
            </div>

            {/* Redbull */}


            <div className="brand-holder" data-aos="fade-up" onClick={() => {handelBrand("Redbull")}}>
              <div className="brand-img">
              <img src={Redbull} alt="Redbull" style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="brand-name">
              Redbull
              </div>
            </div>

          </div>
          <div className="third-brands">
            <h2>Related Products</h2>
          <Poster/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Products



