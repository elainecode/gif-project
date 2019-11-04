import React from 'react';
import ListItem from '../ListItem/ListItem';
import './HomeList.scss';

const HomeList = ({ gifs, clickGif }) => {
  return (
    <div className="list">
      {gifs.map(gif => (
        <ListItem gif={gif} clickGif={clickGif}/>
      ))}
    </div>
  );
};

export default HomeList;
