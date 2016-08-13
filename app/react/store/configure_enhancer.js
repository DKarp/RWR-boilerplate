import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const middlewares = [];
const routingMiddleware = routerMiddleware(browserHistory);
const logger = createLogger({ collapsed: true });

middlewares.push(thunk);
middlewares.push(routingMiddleware);

// enable redux logger only in dev env
(window && process.env.NODE_ENV === 'development') && middlewares.push(logger);

const enhancer = applyMiddleware(...middlewares);

export default enhancer;
