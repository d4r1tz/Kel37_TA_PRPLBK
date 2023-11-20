import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <Link to="/">Pre-Timeskip</Link>
      <Link to="/postTS">Post-Timeskip</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default BottomNavbar;