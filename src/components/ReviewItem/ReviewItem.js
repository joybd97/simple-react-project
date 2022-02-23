import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name,quantity,key,price} = props.product;
    const style = {
        borderBottom: '1px solid gray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px',
        marginRight:'200px'
    };
    return (
        <div style={style} className="review-item">
            <h4 className="product-name" >{name}</h4>
            Quantity : {quantity}
            <p> <small>$ {price} </small></p>
            <br /> <br />
            <button className="cart-btn" onClick={()=> props.handelRemove(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;