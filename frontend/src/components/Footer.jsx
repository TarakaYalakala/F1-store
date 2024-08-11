import React from 'react'
 import './Footer.css'
 import F1 from "../components/images/F1-logo_827x.png"

function Footer() {
  return (
    <div>
      <footer className='main-footer'>
        <div className="footer-content-anc">
            <div className="footer-images">
                <img src={F1} alt="F1 Logo" style={{height:"100%",width:"100%"}}/>
            </div>
            <div className="footer-anc">
            <a href="/home" className='footer-anchor'>Home</a>
            <a href="/about" className='footer-anchor'>About</a>
            <a href="/products" className='footer-anchor'>Upload Products</a>
            <a href="/logout" className='footer-anchor'>Logout</a>
            <a href="/careers" className='footer-anchor'>Careers</a>
            </div>
        </div>
        <div className="footer-logos">
                <a href="https://www.instagram.com/f1/" target='_blank'><i className="fa-brands fa-instagram fa-2xl" style={{color: "white"}} ></i></a>
                <a href="https://www.youtube.com/@Formula1" target='_blank'><i className="fa-brands fa-youtube fa-2xl" style={{color: "#ffffff"}} ></i></a>
                <a href="https://www.formula1.com/" target='_blank'><i className="fa-brands fa-chrome fa-2xl" style={{color: "#ffffff"}} ></i></a>
            </div>
            <div className="footer-fia">
                Fia
            </div>
      </footer>
    </div>
  )
}

export default Footer
