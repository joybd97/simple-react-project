import React, { useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    
    const first10 = fakeData.slice(0,10);
    const [products,useProducts]=useState(first10);

    const [cart,setCart]=useState([]);

    const handelProduct = (product) =>{
        const toBeAdded = product.key;
        let count =1;
        let newCart;
        const sameProduct = cart.find(pd => pd.key === product.key);
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(p => p.key !== toBeAdded);
            newCart = [...others, sameProduct];

        }
        else{
            product.quantity =1;
            newCart = [...cart,product];
        }
        //count = sameProduct.length;
        //console.log('product added',product);
       // const newCart =[...cart,product];
        setCart (newCart);
        
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            
            {
                products.map(product => <Product
                     key={product.key}
                    showAddToCart = {true} 
                    handelProduct = {handelProduct} 
                    product={product}></Product>)
            }
            
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        
            
        </div>

        
    );
};

export default Shop;