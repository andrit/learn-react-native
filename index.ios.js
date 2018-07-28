//Index.ios.js - place code in here for iOS


//Import a Library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
        <Header/>
    );


// Render it to the device
AppRegistry.registerComponent('albums', () => App);