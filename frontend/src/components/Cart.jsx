import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { removeProducts,addOrder } from './Slice';
import "./Cart.css";
import { Link } from 'react-router-dom';



function Cart() {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.cart);
  const Orderitems = useSelector((state) => state.cart.orders);

  const [length, setLength] = useState(false);

  useEffect(() => {
    if (CartItems.length === 0) {
      setLength(true);
    } else {
      setLength(false);
    }
  }, [CartItems]);

  const handelRemove = async(id) => {
     dispatch(removeProducts(id));
  };

  const handelOrders = async(image,price,description) => {
     dispatch(addOrder({Image:image,Price:price,Description:description}));
     console.log(Orderitems);
  }

  return (
    <div>
      <Navbar/>
      {length ? (
        <div className="ctrs-rs">
          <span className='isempty'>Cart is Empty</span>
        </div>
      ) : (
        CartItems.map((item, id) => (
          <div key={id} className='main-ctr-cs'>
            <div className="box-ctr-cs">
              <div className="img-ctr-cs" style={{height:"200px",width:"230px"}} >
                <img src={`data:image/jpeg;base64,${item.Image}`} alt="" style={{height:"100%",width:"100%"}} />
              </div>
              <div className="details-cs">
                <div>{item.Description}</div>
                <p className='price-cart'>Price: {item.Price}₹</p>
              </div>
              <div className="btns-cs" style={{display:"flex",gap:"10px"}}>
                <Link to="/orders" className='btn-cs' onClick={() => {handelOrders(item.Image,item.Price,item.Description)}}>Buy now</Link>
                <button className='btn-remove' onClick={() => handelRemove(id)}>Remove item</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
