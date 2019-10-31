import { GET_ALL_GIFS } from '../constants';

const INITIAL_STATE = [];

const gifsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_GIFS:
      return action.gifs;
    default:
      return state;
  }
};

export default gifsReducer;
