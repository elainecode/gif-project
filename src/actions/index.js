import { GET_ALL_GIFS } from '../constants';

export const get_all_gifs_success = gifs => {
  return {
    type: GET_ALL_GIFS,
    gifs,
  };
};

export const getGifsFromAPI = () => dispatch => {
  fetch('https://lit-dusk-44111.herokuapp.com/api/v1/gifs')
    .then(resp => resp.json())
    .then(data => dispatch(get_all_gifs_success(data)));
};
