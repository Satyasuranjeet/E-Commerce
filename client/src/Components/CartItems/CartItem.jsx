import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Asserts/cart_cross_icon.png";
const CartItem = () => {
  const { getTotalCartAmount,all_products, cartItem, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>QTY</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e,) => {
           if(cartItem[e.id] > 0){
            return <div>
        <div className="cartitem-format cartitems-format-main">
          <img src={e.image} alt="" className="carticon-product-icon" />
          <p>{e.name}</p>
          <p>$ {e.new_price}</p>
          <button className="cartitem-qty">{cartItem[e.id]}</button>
          <p>${e.new_price*cartItem[e.id]}</p>
          <img
          className="casrtitem-remove-icon"
            src={remove_icon}
            onClick={() => {
              removeFromCart(e.id);
            }}
            alt=""
          />
        </div>
        <hr />
      </div>
            
           }
           else{
            return null
           }
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
          <div className="classitem-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="classitem-total-item">
            <p>Shipping Fee</p>
            <p>free</p>
          </div>
          <hr />
          <div className="classitem-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here </p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
