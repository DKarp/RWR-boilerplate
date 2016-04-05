import './example.scss';

import React from 'react';
import { Link } from 'react-router';
import { formattedDate } from 'helpers/date_helpers';

class Example extends React.Component {
  constructor(props, context, updater) {
    super(...arguments);

    this.state = {
      timeNow: new Date()
    };
  }

  static get defaultProps() {
    return {
      title: 'React Webpack Rails example'
    };
  }

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      clicks: React.PropTypes.number
    };
  }

  componentDidMount() {
    const timerId = setInterval( () => {
      return this.setState({ timeNow: new Date() });
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { incrementClicks } = this.props.actions;

    return (
      <div className='example success callout'>
        <p>Hello World</p>
        <p>{ this.props.title }</p>
        <p>Today is { formattedDate(this.state.timeNow) }</p>
        <p>this.props.clicks == { this.props.clicks }</p>
        <button className='button success' onClick={ incrementClicks }>click me</button>
        <p><Link to={ '/some-path' }>link to not found page</Link></p>
      </div>
    );
  }
}

// connect to Redux

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as exampleActions from 'state/actions/example';

function mapStateToProps(state, ownProps) {
  return {
    clicks: state.example.clicks
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(exampleActions, dispatch)
  };
}

const connectedExample = connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);

export default connectedExample;
