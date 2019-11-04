import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.scss';

const ListItem = ({ gif, clickGif }) => {
  const viewID = `${gif.title.split(' ').join('-')}-${gif.uid}`;
  return (
    <div className="list-item" onClick={clickGif(viewID)}>
      <img src={gif.url} alt={gif.title} />
      <div className="tag-names">
        {gif.tags.map(tag => (
          <span> {`#${tag}`}</span>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
