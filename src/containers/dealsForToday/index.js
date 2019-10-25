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
        this.props.loadData(this.props.fetchBy);
    }
    render() {
        // console.log('fakeData',fakeData[[this.props.route]])
        const { loading, error, products, route, api, dealName, } = this.props;

        if (loading) {
            return (<div className="container" >
                <img style={{ height: '350px', width: '100%' }}
                    src={require('../../assets/icons/loading.gif')} />
            </div>)
        }
        if (error) {
            return <div>
                <center><strong>Data not fetch succesfully</strong></center>
            </div>
        }

        return (
            <div className="home-dealToday">
                <ViewAllRow
                    route={route}
                    api={api}
                    apiData={products}
                    dealName={dealName} />
                <Products products={products} newRow={true} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { products, loading, error } = state.DealsForToday;
    return {
        products, loading, error,
    }
}

export default connect(mapStateToProps, {
    loadData
})(DealsForToday)