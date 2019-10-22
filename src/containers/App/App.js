import React, { Component } from 'react';
import Homepage from '../Homepage/Homepage';
import Search from '../Search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="parent">
        <div className="search-container">
          <Search />
        </div>
        <div className="homepage-container">
          <Homepage />
        </div>
      </div>
    );
  }
}

export default App;
