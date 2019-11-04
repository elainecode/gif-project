import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGifsFromAPI, getTagsFromAPI } from '../../actions';
import Homepage from '../Homepage/Homepage';
import Search from '../Search/Search';
import SelectedView from '../SelectedView/SelectedView';
import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.getGifsFromAPI();
    this.props.getTagsFromAPI();
  }

  render() {
    const { gifs, tags } = this.props;
    return (
      <div className="parent">
        <div className="search-container">
          <Search />
        </div>
        <Route
          exact
          path="/"
          render={routerProps => (
            <div className="homepage-container">
              <Homepage gifs={gifs} tags={tags} {...routerProps} />
            </div>
          )}
        />
        <Route
          exact
          path="/gifs/:viewID"
          render={routerProps => (
            <div className="selectedview-container">
              <SelectedView gifs={gifs} {...routerProps} />
            </div>
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ gifs, tags }) => ({
  gifs,
  tags,
});

export default connect(
  mapStateToProps,
  { getGifsFromAPI, getTagsFromAPI },
)(App);
