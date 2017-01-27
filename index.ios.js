// @author: Antonella Solomon

// import library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create a component
const App = () => {
  return (
    <Header />
  );
};

// render to device
AppRegistry.registerComponent('AlbumApp', () => App);
