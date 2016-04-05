import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const connectToRedux = (component, actions, propsMapper) => {
  function mapStateToProps(state) {
    return propsMapper(state);
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

  const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);

  return connectedComponent;
};

export {
  connectToRedux
};
