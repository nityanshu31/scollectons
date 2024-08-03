import React, { useState } from 'react';
import Filter from './Filter';
import ProductCard from './ProductCard';

// Import images
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';

const initialProducts = [
    { image: product1, title: 'Product 1', price: '$500', description: 'Body text', brand: 'Brand 1', rating: 4, offers: ['Buy More, Save More'] },
    { image: product2, title: 'Product 2', price: '$300', description: 'Body text', brand: 'Brand 2', rating: 3, offers: ['No Cost EMI'] },
    { image: product3, title: 'Product 3', price: '$1500', description: 'Body text', brand: 'Brand 1', rating: 5, offers: ['Special Price'] },
    { image: product4, title: 'Product 4', price: '$700', description: 'Body text', brand: 'Brand 3', rating: 2, offers: [] },
    { image: product5, title: 'Product 5', price: '$400', description: 'Body text', brand: 'Brand 2', rating: 4, offers: ['Buy More, Save More'] },
    { image: product6, title: 'Product 6', price: '$800', description: 'Body text', brand: 'Brand 3', rating: 3, offers: ['No Cost EMI'] },
    { image: product7, title: 'Product 7', price: '$200', description: 'Body text', brand: 'Brand 1', rating: 5, offers: [] },
    { image: product8, title: 'Product 8', price: '$1000', description: 'Body text', brand: 'Brand 2', rating: 4, offers: ['Special Price'] },
    { image: product9, title: 'Product 9', price: '$600', description: 'Body text', brand: 'Brand 3', rating: 3, offers: ['No Cost EMI'] },
];

const ProductPage = () => {
    // Filter state
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [rating, setRating] = useState([]);
    const [offers, setOffers] = useState([]);

    // Filter products based on selected criteria
    const filteredProducts = initialProducts.filter(product => {
        const price = parseInt(product.price.replace('$', '').replace(',', ''));
        const min = minPrice ? parseInt(minPrice) : 0;
        const max = maxPrice ? parseInt(maxPrice) : Infinity;

        return (
            price >= min &&
            price <= max &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
            (rating.length === 0 || rating.includes(product.rating)) &&
            (offers.length === 0 || product.offers.some(offer => offers.includes(offer)))
        );
    });

    // Style definitions
    const productPageStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    };

    const mainContentStyle = {
        display: 'flex',
        flex: 1,
    };

    const productGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
        width: 'calc(100% - 250px)', // Adjust width to account for the sidebar
        overflowY: 'auto',
    };

    return (
        <div style={productPageStyle}>
            <div style={mainContentStyle}>
                <Filter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    selectedBrands={selectedBrands}
                    rating={rating}
                    offers={offers}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    setSelectedBrands={setSelectedBrands}
                    setRating={setRating}
                    setOffers={setOffers}
                />
                <div style={productGridStyle}>
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
