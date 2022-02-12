import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <p>
                <small>by: {seller}</small>
            </p>
            <p>${price}</p>
            <p><small>
                Only {stock} left in stock - order soon
                </small></p>
            <button className='cart-btn'
                onClick={() => props.handelProduct(props.product)}
            >
            
            <FontAwesomeIcon icon={faCartPlus} />
            
                add to cart
            </button>
            </div>
        </div>
    );
};

export default Product;