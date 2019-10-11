import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux-saga/dealsForToday/acctions';

import ViewAllRow from '../../components/dealsForToday/viewAllRow';
import Products from '../../components/dealsForToday/products/propducts.dft';
import fakeData from '../../utils/fakeData';
import demoData from '../../utils/demoData';

const { loadData } = actions;
var newDemoData = '';
class DealsForToday extends Component {
    constructor(props) {
        super(props);

        // let filterBy = this.props.fetchBy;
        // newDemoData = demoData[0].product.filter(function (val) {
        //     return val.category.deal === filterBy;
        // });
        // console.log('newDemoData', newDemoData);
        // this.props.callData(this.props.fetchBy);

        this.props.loadData(this.props.fetchBy);
    }
    render() {
        // console.log('fakeData',fakeData[[this.props.route]])
        return (
            <div className="home-dealToday">
                <ViewAllRow
                    route={this.props.route}
                    dealName={this.props.dealName}
                    products={fakeData[this.props.route]} />
                {
                    this.props.products ?
                        <Products row={true} details={fakeData[this.props.route] ? 
                            fakeData[this.props.route] : null} dealName={this.props.dealName} /> : ''
                }
            </div>
        //      <div className="home-dealToday">
        //      <ViewAllRow
        //          route={this.props.route}
        //          dealName={this.props.dealName}
        //          products={newDemoData} />
        //      {
        //          newDemoData ?
        //              <Products row={true} details={newDemoData ? newDemoData : null} dealName={this.props.dealName} /> : ''
        //      }

        //  </div>
        )
    }
}

function mapStateToProps(state) {
    const { test, products } = state.DealsForToday;
    // console.log(state.DealsForToday)
    return {
        test, products
    }
}

export default connect(mapStateToProps, {
    loadData
})(DealsForToday)