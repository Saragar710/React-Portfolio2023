import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import './App.css';
import Footer from './components/Footer';
import Page from './components/Page';
import { useLocation } from 'react-router-dom';
// import Contact from './components/Contact';


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
