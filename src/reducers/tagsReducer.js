import { GET_ALL_TAGS } from '../constants';

const INITIAL_STATE = [];

const tagsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TAGS:
      return action.tags;
    default:
      return state;
  }
};

export default tagsReducer;
