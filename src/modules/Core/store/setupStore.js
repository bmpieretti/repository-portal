import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { repoStore } from '../../RepoDashboard';

const reducer = combineReducers({
  repoStore
});

export default createStore(reducer, applyMiddleware(thunk));
