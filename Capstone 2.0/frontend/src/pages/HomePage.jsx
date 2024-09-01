import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Explore Columbus</h1>
      <p>Your guide to family, women’s, and couples’ activities in Columbus, Ohio.</p>
      <div className="card">
        <h3>Families</h3>
        <Link to="/families">Explore Family Activities</Link>
      </div>
      <div className="card">
        <h3>Women’s Safe Spaces</h3>
        <Link to="/women">Explore Women’s Spaces</Link>
      </div>
      <div className="card">
        <h3>Couples & Friends</h3>
        <Link to="/couples">Explore Activities for Couples & Friends</Link>
      </div>
    </div>
  );
};

export default HomePage;
