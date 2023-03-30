import React,{useState} from 'react'
import Nav from '../../Components/Nav'
import "./style.scss"
import products from '../../Data/products.json'
import ProductCard from '../../Components/Card'


const MainPage = () => {
  const [search,setSearch]=useState('')
  return (
    <div>
      <Nav setSearch={setSearch}/>
      <div className="products-c">
      <div className="container">
      { products.filter(product=> 
      product.vendor.toLowerCase().includes(search.toLowerCase()))
      .map(item=>{
            return (
             <ProductCard key={item.id} product={item}/>
            )
          })}
     
      </div>
      </div>
    </div>
  )
}

export default MainPage




