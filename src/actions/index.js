import { GET_ALL_GIFS, GET_ALL_TAGS } from '../constants';

export const get_all_gifs_success = gifs => {
  return {
    type: GET_ALL_GIFS,
    gifs,
  };
};

export const get_all_tags_success = tags => {
  return {
    type: GET_ALL_TAGS,
    tags,
  };
};

export const getGifsFromAPI = () => dispatch => {
  fetch('https://lit-dusk-44111.herokuapp.com/api/v1/gifs')
    .then(resp => resp.json())
    .then(data => dispatch(get_all_gifs_success(data)));
};

export const getTagsFromAPI = () => dispatch => {
  fetch('https://lit-dusk-44111.herokuapp.com/api/v1/tags')
    .then(resp => resp.json())
    .then(data => dispatch(get_all_tags_success(data)));
};
