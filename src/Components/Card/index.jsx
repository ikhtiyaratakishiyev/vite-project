import React from 'react'
import {BsCurrencyDollar } from 'react-icons/bs';

import './style.scss'

const ProductCard = ({btnName,product}) => {
  return (
    <>
          <div className="product-card">
          <img src={product.img} alt="" />
          <h2>{product.vendor}{product.model}</h2>
          <h3>Price: {product.price} Currency: <BsCurrencyDollar/> </h3>
          <h3>Engine: {product.engine}</h3> 
          <button>Buy Now</button>
         </div>

    </>
  )
}

export default ProductCard


    
         