import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux-saga/header/headerBarOne/acctions';

import HeaderLogo from '../../../components/header/headerBarOne/header.logo';
import HeaderSearch from '../../../components/header/headerBarOne/header.search';
import HeaderCart from '../../../components/header/headerBarOne/header.cart';

const { loadData } = actions;

class HeaderBarOne extends Component {
    render() {
        return (
            <div className="top-nav">
                <div className="row">
                    {/* Logo Component */}
                    <HeaderLogo />
                    <HeaderSearch />
                    <HeaderCart/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    const { test } = state.HeaderBarOne
    return {
        test
        // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
        //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
        // SomeoneReducer:state.SomeOne,
    };
}

export default  connect(mapStateToProps, {
    // name of funcation whose in action here and top
    loadData
})(HeaderBarOne)

// export default HeaderBarOne