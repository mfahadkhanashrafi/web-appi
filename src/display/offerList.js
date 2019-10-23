import React, { useEffect, Component } from 'react';
import Banner from '../containers/banner/index';
import DealsForToday from '../containers/dealsForToday/index';
import TabPanel from '../containers/tabPanel/tabpanel.index.js';
import scrollTop from '../utils/scrollTop';
import Products from '../components/dealsForToday/products/propducts.dft';

class offerList extends Component {

    componentDidMount() {
        console.log('OfferList', this.props.location)
        scrollTop();
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h4>{this.props.location.state.dealName}</h4>
                    {this.props.location.state.apiData ?
                        <div>{this.props.location.state.apiData.length}Items</div>
                        : 'No Any Product Here'}
                    <hr />
                </div>
                {
                    this.props.location.state.apiData ?
                    <Products products={this.props.location.state.apiData} newRow={false} />
                        // <Products api={this.props.location.state.api} row={true}
                        //     details={this.props.location.state.products} /> 
                            :
                        <div>
                            <center><strong>No Data Here</strong></center>
                        </div>
                    //   <Products api={!this.props.location.state.api} row={true}
                    //   details={this.props.location.state.products} />
                }
            </div>
        )
    }
}

export default offerList;