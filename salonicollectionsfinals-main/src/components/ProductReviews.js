import React from 'react';
import sareeImage from '../images/saree.jpg';
import thumbnailImage from '../images/thumbnail.jpg';
import thumbnail2Image from '../images/thumbnail2.jpg';

const ProductReviews = () => {
  const images = [thumbnailImage, sareeImage, thumbnail2Image];

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h2>Ratings & Reviews</h2>
        <div className="rating-summary">
          
          <div className="rating-details">
            <span>20,159 ratings and 1,160 reviews</span>
          </div>
        </div>
        <button className="rate-product-btn">Rate Product</button>
      </div>
      <div className="rating-summary">
        <div className="overall-rating">
          <div className="rating-value">
            <span>4.5</span>
            <span className="stars">★ ★ ★ ★ ★</span>
          </div>
          <div className="rating-count">
            <span>from 1,125k reviews</span>
          </div>
        </div>
        <div className="rating-distribution">
          <div className="rating-bar">
            <span className="rating-label">5.0 ★</span>
            <div className="bar-container">
              <div className="bar-filled" style={{ width: '97%' }}></div>
              <div className="bar-empty"></div>
            </div>
            <span className="rating-count">2823</span>
          </div>
          <div className="rating-bar">
            <span className="rating-label">4.0 ★</span>
            <div className="bar-container">
              <div className="bar-filled" style={{ width: '1.3%' }}></div>
              <div className="bar-empty"></div>
            </div>
            <span className="rating-count">38</span>
          </div>
          <div className="rating-bar">
            <span className="rating-label">3.0 ★</span>
            <div className="bar-container">
              <div className="bar-filled" style={{ width: '0.1%' }}></div>
              <div className="bar-empty"></div>
            </div>
            <span className="rating-count">4</span>
          </div>
          <div className="rating-bar">
            <span className="rating-label">2.0 ★</span>
            <div className="bar-container">
              <div className="bar-filled" style={{ width: '0%' }}></div>
              <div className="bar-empty"></div>
            </div>
            <span className="rating-count">0</span>
          </div>
          <div className="rating-bar">
            <span className="rating-label">1.0 ★</span>
            <div className="bar-container">
              <div className="bar-filled" style={{ width: '0%' }}></div>
              <div className="bar-empty"></div>
            </div>
            <span className="rating-count">0</span>
          </div>
        </div>
      </div>
     
      
      <div className="feedback-section">
        <div className="feedback-tags">
          <span className="tag">Light Weight</span>
          <span className="tag">Value for Money</span>
          <span className="tag">Comfort</span>
          <span className="tag neutral">Material Quality</span>
          <span className="tag neutral">Opacity</span>
        </div>
        <div className="customer-images">
          {images.slice(0, 5).map((src, index) => (
            <img key={index} src={src} alt={`Customer upload ${index + 1}`} className="customer-image"/>
          ))}
          {images.length > 5 && (
            <div className="more-images">+{images.length - 5}</div>
          )}
        </div>
      </div>
      
      <div className="reviews-list">
        <div className="review-item">
          <div className="review-header">
            <span className="review-rating">5★</span>
            <span className="review-title">Awesome Saree! I like it</span>
          </div>
          <div className="review-content">
            <img src={sareeImage} alt="Saree" className="review-image"/>
            <img src={thumbnailImage} alt="Thumbnail" className="review-image"/>
          </div>
          <div className="review-footer">
            <span className="review-author">Saloni Collections Customer</span>
            <span className="review-date">Oct, 2022</span>
            <span className="review-location">Certified Buyer, Saurabh Wake</span>
            <div className="review-likes">
              <span>519</span> <span role="img" aria-label="thumbs up">👍</span>
              <span>97</span> <span role="img" aria-label="thumbs down">👎</span>
            </div>
          </div>
        </div>
        
        <div className="review-item">
          <div className="review-header">
            <span className="review-rating">4★</span>
            <span className="review-title">Nice Saree, Loved it!</span>
          </div>
          <div className="review-content">
            <img src={thumbnail2Image} alt="Thumbnail 2" className="review-image"/>
            <img src={sareeImage} alt="Saree" className="review-image"/>
          </div>
          <div className="review-footer">
            <span className="review-author">Saloni Collections Customer</span>
            <span className="review-date">Jul, 2022</span>
            <span className="review-location">Certified Buyer, Nityanshu</span>
            <div className="review-likes">
              <span>102</span> <span role="img" aria-label="thumbs up">👍</span>
              <span>34</span> <span role="img" aria-label="thumbs down">👎</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
