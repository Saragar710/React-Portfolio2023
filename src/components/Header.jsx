import React from 'react';
 import './../styles/Header.css';
 import Navbar from './Navbar.jsx';

const styles = {
    headerStyle: {
      background: '#C297B8',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };
function Header() {
    return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Sara Garcia</h1>
      <Navbar />
    </header>
  );
}

export default Header;

