import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGifsFromAPI } from '../../actions';
import HomeList from '../../components/HomeList/HomeList';
import TagFilter from '../../components/TagFilter/TagFilter';
import './Homepage.scss';

class Homepage extends Component {
  componentDidMount() {
    this.props.getGifsFromAPI();
  }

  render() {
    const { gifs } = this.props;
    return (
      <>
        <div className="filter-container">
          <TagFilter />
        </div>
        <div className="list-container">
          <HomeList gifs={gifs} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  gifs: state,
});

export default connect(
  mapStateToProps,
  { getGifsFromAPI },
)(Homepage);
