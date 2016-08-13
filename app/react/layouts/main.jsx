import './main.scss';

import React, { PropTypes } from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';

const Main = (props) => (
  <div className="main-layout">
    <Header />
    <main role="main">{ props.children }</main>
    <Footer />
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
