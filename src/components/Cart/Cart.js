import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.cart;
   // const totalPrice = cart.reduce((total,prd) => total + prd.price, 0);
   let totalPrice =0;
   for (let i=0; i<cart.length; i++){
       const product =cart[i];
       totalPrice = totalPrice + product.price;
   } 

   let shipping =0;
   if(totalPrice>=35){
       shipping=0;
   }
   else if(totalPrice>=15){
       shipping = 4.99;
   }
   else if(totalPrice<15 && totalPrice>0){
       shipping = 12.99;
   }

   return (
        <div>
            <h4>Order Summary</h4>
            Items Ordered: {cart.length}
            <p>Product Price: {totalPrice}</p>
            <p>Tax: {Number((totalPrice/10).toFixed(2))}</p>
            <p><small>Shipping cost : {shipping}</small></p>
            <p>Total Price : {Number((totalPrice+shipping+totalPrice/10).toFixed(2))}</p><br />
            <Link to="/review">
            <button className="cart-btn">Review Order</button>
            </Link>
            


        </div>
    );
};

export default Cart;