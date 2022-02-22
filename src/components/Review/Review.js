import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart]=useState([]);
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
        <div>
            <h2>Total Cart items : {cart.length}</h2>
            {
                cart.map( pd => <ReviewItem product ={pd} key={pd.key}> </ReviewItem>)
            }
        </div>
    );
};

export default Review;