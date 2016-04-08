import './main_layout.scss';
import React from 'react';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

const MainLayout = (props) => (
  <div className="main-layout">
    { props.header || <Header /> }

    <main role="main">
      { props.yield }
    </main>

    { props.footer || <Footer /> }
  </div>
);

export default MainLayout;
