import React from 'react';
// import './styles/Header.css';

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
    </header>
  );
}

export default Header;

