import React, { Component } from 'react';
import fakeData from '../../utils/fakeData';
import ProductView from '../../components/product/productView'
import scrollTop from '../../utils/scrollTop';
let newFks = '';
class ViewAllProduct extends Component {

    // console.log('newFK',newFk);

    componentDidMount() {
        scrollTop();
        // console.log('props', this.props.match.url)
        let products = this.props.location.state.products;


    }
    render() {
        let products = this.props.location.state.products;

        return (
            <div class="container">
                {/* start me custum */}
                <div class="standardBoxMain">
                    <div class="row">
                        <center>{(this.props.match.url)}</center>
                    </div>
                </div>
                {/* end me custum */}
                <div class="standardBoxMain">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="side-menu">side-menu all fahad</div>
                        </div>
                        <div class="col-md-9">
                            <div class="row">
                                {!products ? <h1>no Data here</h1> : products.map((v, i) => {
                                    // console.log((v, i), 'map')
                                    return (
                                        <ProductView key={i} item={v} />
                                    )
                                })}


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default ViewAllProduct;