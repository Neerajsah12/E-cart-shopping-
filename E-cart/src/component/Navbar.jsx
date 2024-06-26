import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cart from './Cart'
import { items } from './data'



const Navbar = ({setData,cart}) => {
  const location =useLocation();
  const navigate =useNavigate();

const [searchTerm, setSearchTerm]=useState("")

  const filterByCategory =(category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice =(price)=>{
    const element = items.filter((product)=>product.price >= price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  return (
    
    <header className='sticky-top'>
      <div className="nav-bar">
        <Link to={'/'} className="brand">E-cart</Link>
        <form 
        onSubmit={handleSubmit}
        className="search-bar">
          <input
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
           type="text" 
           placeholder='Search Product'/>
        </form>
        <Link to={'/Cart'} className="cart">
        <button type="button" className="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
      </div>

      {
        location.pathname == '/'  && (
          <div className="nav-bar-wrapper">
        <div className="items">Filter by {"->"}</div>
        <div 
        onClick={()=>setData(items)}
        className="items">No Filter</div>
        <div 
        onClick={()=>filterByCategory("mobiles")}
        className="items">Mobiles</div>
        <div  
        onClick={()=>filterByCategory("laptops")}className="items">Laptops</div>
        <div 
        onClick={()=>filterByCategory("tablets")}className="items">Tablets</div>
        <div 
        onClick={()=>filterByPrice(29990)}
        className="items">{">="} 29990</div>
        <div 
        onClick={()=>filterByPrice(49990)}
        className="items">{">="} 49990</div>
        <div 
        onClick={()=>filterByPrice(69990)}
        className="items">{">="} 69990</div>
        <div 
        onClick={()=>filterByPrice(89990)}
        className="items">{">="} 89990</div>

        
      </div>
        )
      }

      
    </header>
    
  )
}

export default Navbar