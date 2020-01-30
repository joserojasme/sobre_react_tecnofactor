import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Reloj from './components/Reloj/Reloj';
import Routes from './routes/Routes';
import Link from './components/Link/Link';

function App() {
  return (
    <div>
      <Reloj />
      <Link />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
