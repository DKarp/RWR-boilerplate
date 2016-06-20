import './main.scss';

import React, { PropTypes } from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';

const Main = (props) => (
  <div className="main-layout">
    { props.header }
    <main role="main">{ props.yield }</main>
    { props.footer }
  </div>
);

Main.propTypes = {
  header: PropTypes.element,
  yield: PropTypes.element.isRequired,
  footer: PropTypes.element
};

Main.defaultProps = {
  header: <Header />,
  footer: <Footer />
};

export default Main;
