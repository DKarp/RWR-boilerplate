'use strict';

import './example.scss';

import React from 'react';
import { formattedDate } from 'helpers/date_helpers';
import { Link } from 'react-router';

class Example extends React.Component {
  constructor(props, context, updater) {
    super(...arguments);

    this.state = {
      clicks: 0,
      timeNow: new Date()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static get defaultProps() {
    return {
      title: 'React Webpack Rails example'
    };
  }

  static get propTypes() {
    return {
      title: React.PropTypes.string
    };
  }

  componentDidMount() {
    console.log('example component mounted');
    console.log(`current route - ${ this.props.route.name }`);

    const timerId = setInterval( () => {
      return this.setState({ timeNow: new Date() });
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  handleClick() {
    this.setState({ clicks: ++this.state.clicks });
  }

  render() {
    return (
      <div className='example success callout'>
        <p>Hello World</p>
        <p>{ this.props.title }</p>
        <p>Today is { formattedDate(this.state.timeNow) }</p>
        <p>this.state.clicks == { this.state.clicks }</p>
        <button className='button success' onClick={ this.handleClick }>click me</button>
        <p><Link to={ '/some-path' }>link to not found page</Link></p>
      </div>
    );
  }
}

export default Example;
