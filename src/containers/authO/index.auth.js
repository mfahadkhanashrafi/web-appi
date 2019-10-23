import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux-saga/authO/acctions';
import Login from '../../components/authO/login';
import Signup from '../../components/authO/signup';
import scrolltop from '../../utils/scrollTop';

const { loadData } = actions;


class AuthO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false,
            userName: '',
            email: '',
            password: '',
            signupDetail: {
            },
            loginDetail: {},
        }
        scrolltop();
    }

   
    render() {
        console.log('Auth', this.props.location)
        return (
            <div>
                {this.props.location.pathname === '/signup' ?
                    <Signup /> :
                    <Login />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { test } = state.AuthO;
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
})(AuthO)