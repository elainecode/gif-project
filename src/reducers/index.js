import { combineReducers } from 'redux';
import gifsReducer from './gifsReducer';
import tagsReducer from './tagsReducer';

const rootReducer = combineReducers({
  tags: tagsReducer,
  gifs: gifsReducer,
});

export default rootReducer;
