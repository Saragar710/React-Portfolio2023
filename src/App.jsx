//import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
// import './App.css';
import Footer from './components/Footer.jsx';
import Page from './components/Page.jsx';
import { useLocation } from 'react-router-dom';
import Contact from './components/Contact.jsx';


function App() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Header>
        <Navbar currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
       
       

    </>

  );
}

export default App;
