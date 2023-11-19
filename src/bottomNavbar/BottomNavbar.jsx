import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default BottomNavbar;