import { Fragment } from 'react';
import ExploreTopBooks from './components/ExploreTopBooks';
import Carousel from './components/Carousel';
import Heros from './components/Heros';
import LibraryServices from './components/LibraryServices';

const HomePage = () => {
  return (
    <Fragment>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </Fragment>
  );
};

export default HomePage;
