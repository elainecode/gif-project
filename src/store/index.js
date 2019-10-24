import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gifsReducer from '../reducers/gifsReducer';
const store = createStore(
  gifsReducer,
  applyMiddleware(thunk)
);
export default store;
