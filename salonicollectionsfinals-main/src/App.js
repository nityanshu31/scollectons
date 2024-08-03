import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './pages/CategoryPage';
import Offers from './pages/OffersPage';
import Help from './pages/HelpPage';
import Signup from './components/Signup';
import Navbar from './components/NavBar';
import Carousel from './components/carousel';
import RecommendedPage from './components/RecommendedPage';
import TopRatedPage from './components/TopRatedPage';
import RecentlyViewed from './components/RecentlyViewed';
import Sponsored from './components/Sponsored';
import ProductPage from './components/ProductPage';
import './App.css';
import Login from './components/Login';
import EditProfile from './components/Editprofile';
import Productdes from './pages/ProductDes';




const App = () => {
  const [page, setPage] = useState('home');

  return (
    <Router>
      <div className="app">
        <div className='content'>
        <Header setPage={setPage} />
        <Navbar setPage={setPage} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Carousel />
                <RecommendedPage />
                <TopRatedPage />
                <Sponsored />
                <RecentlyViewed />
              
                
              </>
            } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            
            <Route path="/category" element={<Category />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/help" element={<Help />} />
            <Route path="/productdes" element={<Productdes /> } />
          </Routes>
        </main>
        
      </div>
      <Footer />y
      </div>
    </Router>
  );
};

export default App;
