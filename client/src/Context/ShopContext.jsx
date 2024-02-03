import React, { createContext , useState } from 'react'
import all_products from '../Components/Asserts/all_product'
export const ShopContext = createContext(null);

const getDefaultCart=()=>{

   let cart ={};
  for(let index=0; index < all_products.length+1;index++){
   cart[index]=0;
  }
  return cart;
  }
const ShopContextProvider = (props) => {

   const [cartItem,setCartItem]=useState(getDefaultCart());
   
 
  const addToCart=(itemId)=>{
   setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  }
  const removeFromCart=(itemId)=>{
   setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  }
  const getTotalCartAmount =() =>{
   let total =0;
   for(const item in cartItem){
    if(cartItem[item]>0){
     let itemInfo = all_products.find((e)=>e.id===Number(item));
     total += itemInfo.new_price*cartItem[item];
    }
   }
   return total;
  }
  const getTotalCartItems =() =>{

   let total =0;
   for(const item in cartItem){
    if(cartItem[item]>0){
     total += cartItem[item];
    }
   }
   return total;
  }
 

  const contextValue={getTotalCartItems,getTotalCartAmount,all_products,cartItem,addToCart,removeFromCart};
   return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
   )
}

export default ShopContextProvider;