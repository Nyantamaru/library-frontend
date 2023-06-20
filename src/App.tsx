import { Fragment } from 'react';
import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import Footer from './layouts/NavbarAndFooter/Footer';
import HomePage from './layouts/HomePage/HomePage';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
      <Footer />
    </Fragment>
  );
};

export default App;

//goto: 11 sprinb boot backend
