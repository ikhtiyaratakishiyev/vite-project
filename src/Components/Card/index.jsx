import React from 'react'

import './style.scss'

const ProductCard = ({btnName,product}) => {
  return (
    <>
          <div className="product-card">
          <img src={product.img} alt="" />
          <h2>{product.vendor}{product.model}</h2>
          <h3>Price: {product.price} Currency: {product.valyuta} </h3>
          <h3>Engine: {product.engine}</h3> 
          <button>{btnName}</button>
         </div>

    </>
  )
}

export default ProductCard


    
         