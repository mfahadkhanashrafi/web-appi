import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Tabs from '../../components/tabPanel/tabpanel.tabsContent';
import TabsMenu from '../../components/tabPanel/tabpanel.menu';
import actions from '../../redux-saga/tabPanel/acctions';

import fakeData from '../../utils/fakeData';

const { loadData } = actions;

class TabPanel extends Component {
    render() {

        return (<div className="tabs">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-2">
                        <h5>{this.props.viewAllName} <span className="viewAll">
                            <Link to={{
                                pathname: `all/${this.props.route}`, state: {
                                    route: this.props.route,
                                    products: fakeData[this.props.route],
                                }
                            }} className="viewAll">View All <i className="fal fa-long-arrow-right"></i></Link></span>  </h5>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="inner-detail-tab">
                    <TabsMenu
                        route={this.props.route}
                        tabMenu={this.props.tabMenu}
                        left={this.props.left} />
                </div>
            </div>
        </div>)
    }

}

function mapStateToProps(state) {
    // console.log(state)
    const { test } = state.TabPanel;
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
})(TabPanel);

