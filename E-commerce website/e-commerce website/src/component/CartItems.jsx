import React, { useContext } from "react";
import "./Cartitem.css";
import { ShopContext } from "./ShopContext";
import remove_icon from "./image/cart_cross_icon.png"

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     {all_product.map((e)=>{
      if(cartItems[e.id]>0){
        return  <div>
        <div className="cartitem-format cartItems-format-main">
          <img src={e.image} alt="" className="carticon-product-icon" />
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className="cartitem-quantity">{cartItems[e.id]}</button>
          <p>${e.new_price*cartItems[e.id]}</p>
          <img className="cartitem-remove-icon" src={remove_icon}  on onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
      </div>
        
      }
      return null;
     })}
     <div className="cartitem-down">
      <div className="cartitem-total">
        <h1>Cart Total</h1>
        <div>
          <div className="cartitem-total-item">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <button>PROCEED TO CHECKOUT</button>
         

        </div>
      </div>
     </div>
    </div>
  );
};

export default CartItems;
