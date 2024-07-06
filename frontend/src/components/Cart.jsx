import React from 'react'
import Navbar from './Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { Buffer } from 'buffer';
import { useState } from 'react';

function Cart() {

  const CartItems = useSelector((state) => state.cart.cart);

  const [length, setlength] = useState(false);

  if (CartItems.length == 0) {
     setlength(true);  
  }


  return (
    <div>
        <Navbar/>
     

      {  length? <div>Cart is Empty Now</div> : CartItems.map((item,id) => {
            return ( 
            <div key={id} style={{margin:"20px"}}>
              <img src={`data:image/jpeg;base64,${item.Image}`} alt="" style={{height:"200px",width:"250px"}} />
              <div key={id}>{item.Title}</div>
              <div>{item.Description}</div>
              <div>{item.Price}</div>
              <button>Buy Now</button>
              <button>Remove From cart</button>
            </div>
          
          )

        })
      }
    </div>
  )
}

export default Cart
