import React, { Component } from 'react';
import { connect } from 'react-redux';
import './selectedView.scss';


class SelectedView extends Component {
  render() {
    const { viewID } = this.props.match.params;
    const { gifs } = this.props;

    const selected = gifs.find(
      gif =>
        `${gif.title.split(' ').join('-')}-${gif.uid}` === viewID,
    );
    return (<div className="selected-view-container">
      </div>);
  }
}

export default SelectedView;
