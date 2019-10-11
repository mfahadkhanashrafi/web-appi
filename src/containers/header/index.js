import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux-saga/header/acctions';

import HeaderBarOne from './headerBarOne/headerBarOne';
import HeaderBarTwo from './headerBarTwo/headerBarTwo';


const { loadData } = actions;

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-9 col-md-10 col-lg-12">
                            <div className="main-nav">
                                {/* component One */}
                                <HeaderBarOne />
                                {/* component Two */}
                                <HeaderBarTwo />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    const { test } = state.Header;
    return {
        test
        // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
        //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
        // SomeoneReducer:state.SomeOne,
    };
}

export default connect(mapStateToProps, {
    // name of funcation whose in action here and top
    loadData
})(Header)


// export default Header