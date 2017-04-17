import React, { Component } from 'react';
import { Text } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import * as ActionTypes from '../actions/ActionTypes';
import { setFilter } from '../actions';
// Material Design
import { ButtonGroup } from 'react-native-elements';

const styles = {
    containerStyle: {
        height: 30,
        margin: 0,
        padding: 0,
    },
    
};
const buttons = ['All', 'Active', 'Completed'];

let VisibilityFilter = ({ mainState, handleSetFilter }) => (
    <ButtonGroup
        onPress={handleSetFilter(2)}
        selectedIndex={mainState.filter}
        buttons={buttons}
        containerStyle={styles.containerStyle}
        selectedBackgroundColor={mainState.mainColor}
    />
);

const mapStateToProps = (state) => ({
    mainState: state.mainState
});

const mapDispatchToProps = (dispatch) => ({
    handleSetFilter: (filter) => {
        dispatch(setFilter((filter)))
    },
});

VisibilityFilter = connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);

export default VisibilityFilter;