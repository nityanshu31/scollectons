import React from 'react';
import Header from '../components/Header'; // Adjust path as necessary
import NavBar from '../components/NavBar'; // Adjust path as necessary
import Product from '../components/Product'; // Adjust path as necessary
import RelatedProducts from '../components/RelatedProducts'; // Adjust path as necessary
import ProductReviews from '../components/ProductReviews'; // Adjust path as necessary
import '../App.css'; // Adjust path as necessary

const ProductDes = () => {
    return (
        <div>
            
            <Product />
            <ProductReviews />
            <RelatedProducts />
            
        </div>
    );
}

export default ProductDes;
