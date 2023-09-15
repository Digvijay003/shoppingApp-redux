import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  let total =0
  const showCartItems=useSelector(state=>state.cart.showCart)
  const allItems=useSelector(state=>state.cart.itemsList)
 
    allItems.forEach(item=>{
      total=total+item.totalPrice
    })

  const handlePlaceOrder=()=>{
    alert('Your order is placed and Total Amount is'+ ' ' + '$'+total)
  }
  



  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCartItems?<CartItems/>:null}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn"onClick={handlePlaceOrder}>Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
