import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedView extends Component {
  render() {
    const { viewID } = this.props.match.params;
    const { gifs } = this.props;

    const selected = gifs.find(
      gif =>
        `${gif.title.split(' ').join('-')}-${gif.uid}` === viewID,
    );
    return <div>{selected && selected.url}</div>;
  }
}

export default SelectedView;
