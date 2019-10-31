import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGifsFromAPI, getTagsFromAPI } from '../../actions';
import HomeList from '../../components/HomeList/HomeList';
import TagFilter from '../../components/TagFilter/TagFilter';
import './Homepage.scss';

class Homepage extends Component {
  componentDidMount() {
    this.props.getGifsFromAPI();
    this.props.getTagsFromAPI();
  }

  render() {
    const { gifs, tags } = this.props;

    return (
      <>
        <div className="filter-container">
          <TagFilter tags={tags} />
        </div>
        <div className="list-container">
          <HomeList gifs={gifs} />
        </div>
      </>
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
)(Homepage);
