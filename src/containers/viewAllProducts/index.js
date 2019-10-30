import React, { Component } from 'react';
import fakeData from '../../utils/fakeData';
import ProductView from '../../components/product/productView'
import scrollTop from '../../utils/scrollTop';
let newFks = '';
class ViewAllProduct extends Component {

    // console.log('newFK',newFk);

    componentDidMount() {
        scrollTop();
    }

    render() {
        let products = this.props.location.state.products;
        console.log('products', products)
        return (
            <div className="container">
                {/* start me custum */}
                {/* <div className="standardBoxMain">
                    <div className="row">
                    <div className="col-md-3">side-menu all fahad</div>
                        <center>{(this.props.match.url)}</center>
                    </div>
                </div> */}

                {/* end me custum */}
                <div className="standardBoxMain">
                    <div className="row">
                        <div className="col-md-3">
                            <div>side-menu all fahad</div>
                            <div className="side-menu">
                                side menu here
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        value="asd"
                                        id="defaultCheck1"
                                        onChange={(e) => console.log(e.target.value)} />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Cloth
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-9">
                            <div className="row">
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