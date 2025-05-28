import React from 'react';
import { Bell } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <Bell className="search-icon" size={18} />
      </div>
    </div>
  );
};

export default Header;
