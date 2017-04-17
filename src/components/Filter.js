import React, { Component } from 'react';
import { Text } from 'react-native';
// Material Design
import { ButtonGroup } from 'react-native-elements';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }


    render() {

        const style = {
            height: 30,
            margin: 0,
            padding: 0,
        };
        const buttons = ['All', 'Active', 'Completed'];
        const { selectedIndex } = this.state;

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={style}
                selectedBackgroundColor="#009688"
            />
        );
    }
}

export default Filter;