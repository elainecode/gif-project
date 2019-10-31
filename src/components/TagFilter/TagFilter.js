import React, { Component } from 'react';
import './TagFilter.scss';

class TagFilter extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="tag-list">
        {tags.map(tag => (
          <div className="tag-item">{`#${tag.tagname}`}</div>
        ))}
      </div>
    );
  }
}

export default TagFilter;
