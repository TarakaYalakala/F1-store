import React from 'react'
import "./Orders.css"
import { useDispatch,useSelector } from 'react-redux'
import {addOrder,removeOrder} from './Slice'
import Footer from './Footer';
import { useState } from 'react';
import {Link} from "react-router-dom"

function Orders() {

    const Orderitems = useSelector((state) => state.cart.orders);
    const dispatch = useDispatch();

    const [count, setcount] = useState(1);


    const handelinc = () => {
       setcount(count +1);
    }

    const handeldec = () => {
      if (count == 1 && count <= 1) {
        setcount(1);
      } else {
        setcount(count -1);
      }
    }

  return (
    <div>
      <div className="main-ctr-orders">
        <h1>Your Orders</h1>
        {Orderitems.map((item, index) => (
          <div key={index} className="order-item">
            <div className="order-images">
    <img src={`data:image/jpeg;base64,${item.Image}`} alt="" style={{height:"100%",width:"100%"}} />
            </div>
            <h3>Item: {item.Description}</h3>
            <p>Price: {item.Price}₹</p>
            <p>Title: T-shirts</p>
            
            <div className="orders-flex">
            <button onClick={() => dispatch(removeOrder(index))} className='remove-orders'>Remove from Orders</button>
            <div className="qty">Select Quantity</div>
            <div className="three-orders">
              <button className='bdy-btn' onClick={handeldec}>-</button>
              <div className="counts">{count}</div>
              <button className='bdy-btn' onClick={handelinc}>+</button>
            </div>

            </div>

            <div className="buynow">
              <Link to='/home'>Order now</Link>
            </div>

          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Orders
