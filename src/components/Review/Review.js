import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart]=useState([]);

    const handelRemove = (productkey) => {
       // console.log('Remove click :',productkey);

        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }

    useEffect(()=> {
        const saveCart = getDatabaseCart();
        const products = Object.keys(saveCart);
        
        const counts = products.map(key =>{
            const product = fakeData.find(pd =>pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(counts);
       // console.log(counts);
    }, [])
    return (
        <div className="shop-container">
             
            <div className="product-container">
            {
                cart.map( pd => <ReviewItem product ={pd} key={pd.key} handelRemove={handelRemove}> </ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;