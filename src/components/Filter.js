import React, { Component } from 'react';
import { Text } from 'react-native';
// Material Design
import { ButtonGroup } from 'react-native-elements';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }
        // this.updateIndex = this.updateIndex.bind(this);
    }
    updateIndex = (selectedIndex) => {
        const { handleFilter } = this.props;
        this.setState({ selectedIndex });
        handleFilter(this.filterSwitch(selectedIndex));
    }

    filterSwitch = (index) => {
        switch (index) {
            case 0:
                return 'ALL';
            case 1:
                return 'Active';
            case 2:
                return 'Completed';
            default:
                return 'ALL';
        }
    }

    render() {

        const style = {
            height: 30,
            margin: 0,
            padding: 0,
        };
        const buttons = ['All', 'Active', 'Completed'];
        const { filter } = this.props;
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