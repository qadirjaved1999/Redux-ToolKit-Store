import React from 'react'
import '../globalStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Store/CartSlice';


const Cart = () => {
  const getCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCartItem = (id) => {
    console.log("remove item")
   dispatch(remove(id));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
           getCart.map((product) => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => removeCartItem(product.id)} className='btn'>Remove</button>
            </div>
           ))
        }
      </div>
    </div>
  )
}

export default Cart;