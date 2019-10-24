import React from 'react';
import ListItem from '../ListItem/ListItem';
import './HomeList.scss';

const HomeList = ({gifs}) => {
  return (
    <div className="list">
    {gifs.map( gif => <ListItem gif={gif}/>)}
    </div>
  );
};

export default HomeList;
