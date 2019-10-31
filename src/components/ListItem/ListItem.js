import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import './ListItem.scss';

const ListItem = ({ gif }) => {
  return (
    <div className="list-item">
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
