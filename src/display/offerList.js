import React, { useEffect, Component } from 'react';
import Banner from '../containers/banner/index';
import DealsForToday from '../containers/dealsForToday/index';
import TabPanel from '../containers/tabPanel/tabpanel.index.js';
import scrollTop from '../utils/scrollTop';
import Products from '../components/dealsForToday/products/propducts.dft';

class offerList extends Component {

    componentDidMount() {
        // window.scrollTo({
        //     top: 100,
        //     left: 100,
        //     behavior: 'smooth'
        // });
        scrollTop();
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h4>{this.props.location.state.dealName}</h4>
                    {this.props.location.state.products ? <div>{this.props.location.state.products.length}Items</div>
                        : 'No Any Product Here'}
                    <hr />
                </div>
                {
                    this.props.location.state.products ? <Products details={this.props.location.state.products} /> : <h1>no-Data-Here</h1>
                }
            </div>
        )
    }
}

export default offerList;