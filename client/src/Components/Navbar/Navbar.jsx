import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import logo from '../Asserts/logo.png'
import cart_icon from '../Asserts/cart_icon.png'
const Navbar = () => {
    const[menu,setMenu]=useState("Home");
    const{getTotalCartItems} =useContext(ShopContext);
    return (
    <div className="Navbar">
     <div className="nav-logo">
         <img src={logo} alt="logo" />
     <p>BBAZAAR</p>
     </div>
     <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}><Link  style={{textDecoration:'none'}}to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link  style={{textDecoration:'none'}}to="/mens">Men</Link> {menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link  style={{textDecoration:'none'}}to="/womens">Women</Link> {menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link  style={{textDecoration:'none'}}to="/kids">Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
     </div>
    </div>
  )
}

export default Navbar
