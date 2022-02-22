import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const productinfo = fakeData.find(pd => pd.key === productKey);
    console.log(productinfo);
    return (
        <div>
            <h1>Your Product detail </h1>
            <Product showAddToCart={false} product={productinfo}></Product>
        </div>
    );
};

export default ProductDetail;