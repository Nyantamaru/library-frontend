import { Fragment } from 'react';
import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import ExploreTopBooks from './layouts/HomePage/ExploreTopBooks';
import Carousel from './layouts/HomePage/Carousel';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </Fragment>
  );
};

export default App;

//goto: 9 return book
