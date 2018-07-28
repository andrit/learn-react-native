import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = () => {
    const {textStyle} = styles;
    return <Text style={textStyle}>Flip Through Albums</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});

export default Header;