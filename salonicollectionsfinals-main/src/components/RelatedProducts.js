import React, { useState } from 'react';
import "../index.css";

import sareeImage from '../images/saree.jpg';
import thumbnailImage from '../images/thumbnail.jpg';
import thumbnail2Image from '../images/thumbnail2.jpg';

const RelatedProducts = () => {
  const [currentImage, setCurrentImage] = useState(thumbnailImage);

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <div className="related-products-list">
        <div className="related-product">
          <img
            src={thumbnailImage}
            alt="Pink Georgette Saree With Ethnic Embroidery And Embellishments"
            onMouseOver={() => setCurrentImage(sareeImage)}
            onMouseOut={() => setCurrentImage(thumbnailImage)}
          />
          <div className="related-product-details">
            <p>Pink Georgette Saree With Ethnic Embroidery And Embellishments</p>
            <p>₹3,899.00</p>
            <p>37% OFF.</p>
          </div>
        </div>
        <div className="related-product">
          <img
            src={thumbnailImage}
            alt="Pink Floral Print Chanderi Saree With Tassels"
            onMouseOver={() => setCurrentImage(thumbnailImage)}
            onMouseOut={() => setCurrentImage(thumbnailImage)}
          />
          <div className="related-product-details">
            <p>Pink Floral Print Chanderi Saree With Tassels</p>
            <p>₹3,374.00</p>
            <p>22% OFF.</p>
          </div>
        </div>
        <div className="related-product">
          <img
            src={thumbnailImage}
            alt="Pink Floral Zari Woven Design Silk Blend Saree With Tassels"
            onMouseOver={() => setCurrentImage(thumbnail2Image)}
            onMouseOut={() => setCurrentImage(thumbnailImage)}
          />
          <div className="related-product-details">
            <p>Pink Floral Zari Woven Design Silk Blend Saree With Tassels</p>
            <p>₹8,500.00</p>
            <p>11% OFF.</p>
          </div>
        </div>
        <div className="related-product">
          <img
            src={thumbnailImage}
            alt="Pink Chiffon Saree With Stone Embellished Borders"
            onMouseOver={() => setCurrentImage(thumbnail2Image)}
            onMouseOut={() => setCurrentImage(thumbnailImage)}
          />
          <div className="related-product-details">
            <p>Pink Chiffon Saree With Stone Embellished Borders</p>
            <p>₹1,649.00</p>
            <p>45% OFF.</p>
          </div>
        </div>
        <div className="related-product">
          <img
            src={thumbnailImage}
            alt="Fuchsia Tussar Zari Woven Saree with Tasselled Border"
            onMouseOver={() => setCurrentImage(thumbnail2Image)}
            onMouseOut={() => setCurrentImage(thumbnailImage)}
          />
          <div className="related-product-details">
            <p>Fuchsia Tussar Zari Woven Saree with Tasselled Border</p>
            <p>₹4,498.00</p>
            <p>9% OFF.</p>
          </div>
        </div>
        <div className="related-product">
          <img
            src={thumbnailImage}
            alt="Mustard Ethnic Motifs Woven Design Jacquard Weave Silk Blend Saree"
            onMouseOver={() => setCurrentImage(thumbnail2Image)}
            onMouseOut={() => setCurrentImage(thumbnailImage)}
          />
          <div className="related-product-details">
            <p>Mustard Ethnic Motifs Woven Design Jacquard Weave Silk Blend Saree</p>
            <p>₹2,799.00</p>
            <p>30% OFF.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
