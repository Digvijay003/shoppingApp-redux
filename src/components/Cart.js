import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../slices/cart-slice";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalQuantity);
  const dispatch=useDispatch()
  const handleShowCart=()=>{
    dispatch(showCart())

  }
  return (
    <div className="cartIcon" onClick={handleShowCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
