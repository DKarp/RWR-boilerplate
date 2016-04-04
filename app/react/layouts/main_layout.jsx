'use strict';

import './main_layout.scss';
import React from 'react';

import Header from 'components/header/header.jsx';
import Footer from 'components/footer/footer.jsx';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="main-layout">
        { this.props.header || <Header /> }

        <main role="main">
          { this.props.yield }
        </main>

        { this.props.footer || <Footer /> }
      </div>
    );
  }
}

export default MainLayout;
