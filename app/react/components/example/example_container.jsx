import Example from './example';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as clickActions from 'state/actions/clicks';
import * as redditActions from 'state/actions/reddit';

function mapStateToProps(state, ownProps) {
  return {
    clicks: state.clicks,
    posts: state.reddit.posts
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators({ ...clickActions, ...redditActions }, dispatch)
  };
}

const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);

export default ExampleContainer;
