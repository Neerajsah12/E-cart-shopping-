import React from 'react'
import "./ProductDisplay.css"
import { ShopContext } from './ShopContext';
import { useContext } from 'react';

const ProductDisplay = (props) => {
  const {product}= props;

  const {addToCart}= useContext(ShopContext);
  return (
    <div className='productdisplay'>
     <div className="productdisplay-left">
     <div className="productdisplay-img">
        <div className="productdisplay-main-img">
          <img src={product.image} alt="" />
        </div>

      </div>

     </div>

     <div className="productdisplay-right">
      <h1>{product.name}</h1>
      <div className="productdisplay-right-price">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-new-old">${product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis voluptatibus, amet consequatur error nulla, earum nemo, nihil voluptatum voluptates dolor consequuntur autem dolores repudiandae.
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>


      

     </div>


    </div>
  )
}

export default ProductDisplay