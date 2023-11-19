import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({onClickFunc}) => {
  return (
    <div className="header">
      <h2>ONE PIECE EPISODES LIST</h2>
      <button className="header-button" onClick={onClickFunc}>Log Out</button>
    </div>
  );
};

export default Header;