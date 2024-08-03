import React, { useState } from 'react';

// Import images from the src directory
import sareeImage from '../images/saree.jpg';
import thumbnailImage from '../images/thumbnail.jpg';
import thumbnail2Image from '../images/thumbnail2.jpg';

const Product = () => {
  const [mainImage, setMainImage] = useState(sareeImage);

  const changeImage = (image) => {
    setMainImage(image);
  };

  return (
    <div className="product">
      
      <div className="product-image">
        <img src={mainImage} alt="Saree" />
      </div>
      <div className="product-image-thumbnails">
        <img
          src={thumbnailImage}
          alt="Thumbnail"
          onMouseOver={() => changeImage(thumbnailImage)}
        />
        <img
          src={thumbnail2Image}
          alt="Thumbnail 2"
          onMouseOver={() => changeImage(thumbnail2Image)}
        />
        <img
          src={sareeImage}
          alt="Saree"
          onMouseOver={() => changeImage(sareeImage)}
        />
      </div>
      <div className="product-details">
        <h2>Saree</h2>
        <p className="price">
          <span className="original-price">£40.00</span> £28.00
        </p>
        <p className="sold">1,238 Sold</p>
        <p className="rating">4.5</p>
        <p className="description">
          Boba etiam ut bulla tea est potus dilectus singulari compositiones saporum et textum...
          <span className="see-more">See More...</span>
        </p>
        <p className="color">Color: Royal Brown</p>
        <div className="actions">
          <button className="btn add-to-cart">Add To Cart</button>
          <button className="btn checkout-now">Checkout Now</button>
        </div>
        <a href="#" className="delivery-terms">Delivery T&C</a>
      </div>
    </div>
  );
};

export default Product;
