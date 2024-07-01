import React from 'react'
import './Card.css'
import cart from './images/Lh - still we rise.jpeg'

function Card() {
  return (
    <div className="all-cards">


      {/*  card -1 */}
       <div className='main-cntr'>
      <div className="container">
        <div className="headers">
          <div className="image-container">
            <img src={cart} alt="Lh" className='main-img' />
          </div>
        </div>
        <div className="titles">
          <div className='main-title'>Title: LH Wallpaper</div>
          <div className='main-subtitle'>Price: 224$</div>
          <div className="rating">Ratings: 4.5</div>
          <div className="btn-container">
            <button className='btn-ctr'>
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>


    {/* card -2 */}

    <div className='main-cntr'>
      <div className="container">
        <div className="headers">
          <div className="image-container">
            <img src={cart} alt="Lh" className='main-img' />
          </div>
        </div>
        <div className="titles">
          <div className='main-title'>Title: LH Wallpaper</div>
          <div className='main-subtitle'>Price: 224$</div>
          <div className="rating">Ratings: 4.5</div>
          <div className="btn-container">
            <button className='btn-ctr'>
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Card
