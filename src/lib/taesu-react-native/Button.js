import React, { Component } from 'react';
import { Text } from 'react-native';

const styles = {
    default: {
        backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 30,
        width: 70,
    }
};

const Button = (props) => (
   <Text style={styles.default}>Del</Text>
);

export default Button;