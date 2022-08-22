import React, { useEffect, useState } from 'react';
import Menu from 'Components/Menu/Menu';
import Header from 'Components/Header/Header';
import Main from 'Components/Main/Main';
import Footer from 'Components/Footer/Footer';
import Loader from 'Components/Loader/Loader';
import './Root.scss';

const Root = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {!isLoaded && <Loader />}
      <Menu />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Root;
