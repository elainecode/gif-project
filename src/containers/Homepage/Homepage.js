import React, { Component } from 'react';
import HomeList from '../../components/HomeList/HomeList';
import TagFilter from '../../components/TagFilter/TagFilter';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <>
        <div className="filter-container">
          <TagFilter />
        </div>
        <div className="list-container">
          <HomeList />
        </div>
      </>
    );
  }
}

export default Homepage;
