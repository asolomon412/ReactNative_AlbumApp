import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

// initializing state to empty
  state = { albums: [] };

  // fetching album content from test api
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));

  }
// provide album detail
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
  return (
    <View>
      {this.renderAlbums()}
    </View>
    );
  }
}

export default AlbumList;
