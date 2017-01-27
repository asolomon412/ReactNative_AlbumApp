// @author: Antonella Solomon

// import library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// render to device
AppRegistry.registerComponent('AlbumApp', () => App);
