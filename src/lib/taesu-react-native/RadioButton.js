import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';

const styles = {
    outside: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inside: {
        backgroundColor: 'gray',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 7,
        height: 15,
        width: 15,
    },
}

const RadioButton = (props) => (
    <View style={[styles.outside]}>
        {props.complete ? <View style={[styles.inside]} /> : null }
    </View>
);

/*class RadioButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    handleOnPress = () => {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <TouchableHighlight
                style={[styles.off]}
                onPress={this.handleOnPress}
            >
                {this.state.checked ? <View style={styles.on}></View> : <View></View>}
            </TouchableHighlight>
        );
    }
}*/

export default RadioButton;