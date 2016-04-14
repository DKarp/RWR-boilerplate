import './example.scss';

import React from 'react';

class Example extends React.Component {
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

  render() {
    const { incrementClicks, fetchPosts } = this.props.actions;

    return (
      <div className='example success callout'>
        <p>Hello World</p>
        <p>{ this.props.title }</p>
        <button className='button success' onClick={ incrementClicks }>click me</button>
        <p>this.props.clicks == { this.props.clicks }</p>
        <button className='button' onClick={ fetchPosts }>
          fetch posts from reddit
        </button>
        {
          this.props.posts.map(post => <p key={ post.id }>{ post.title }</p>)
        }
      </div>
    );
  }
}

export default Example;
