import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeList from '../../components/HomeList/HomeList';
import TagFilter from '../../components/TagFilter/TagFilter';
import './Homepage.scss';

class Homepage extends Component {
  clickGif = viewID => e => {
    e.preventDefault();
    this.props.history.push(`/gifs/${viewID}`);
  };

  render() {
    const { gifs, tags } = this.props;
    const { clickGif } = this;

    return (
      <>
        <div className="filter-container">
          <TagFilter tags={tags} />
        </div>
        <div className="list-container">
          <HomeList gifs={gifs} clickGif={clickGif}/>
        </div>
      </>
    );
  }
}

export default Homepage;
