// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Custom
import Filter from '../components/Filter';
import { setFilter } from '../actions';

const mapStateToProps = (state) => ({
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    handleFilter: (filter) => {
        dispatch(setFilter(filter));
    },
});

const FilterList = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterList;