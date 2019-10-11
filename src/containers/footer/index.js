import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../redux-saga/footer/acctions';

import Subscribe from '../../components/footer/subscribe/subscribe';
import FooterNav from '../../components/footer/footerNav/footerNav';
import FooterBottom from '../../components/footer/footerBottom/footer.bottom';


const { loadData } = actions;


class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Subscribe />

                <div className="footer">
                    <div className="container">
                        <FooterNav />
                        
                    </div>
                    <FooterBottom/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    const { test } = state.Footer;
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
})(Footer);

