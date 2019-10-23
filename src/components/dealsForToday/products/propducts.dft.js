import React, { Component } from 'react';
import Product from '../../product/index.product';
import ProductView from '../../product/productView';
import fakeData from '../../../utils/fakeData';

class product_dft extends Component {
    constructor(props) {
        super(props)
        // console.log('Products',this.props)
    }

    render() {
        const {products, newRow} = this.props;
        return (
            <div class="container">
            <div class="row">
                <div class="standardBox">
                        {products && newRow ? (
                            // console.log('products',products.length)
                            products.slice(0, 5).map((items, index) => {
                                return <Product key={index} product_items={items} />
                                // return <ProductView key={index} item={items} offer={true} />
                            })
                        ) : products ?
                                (products.map((items, index) => {
                                    return <Product key={index}  product_items={items} />
                                    // return <ProductView key={index} item={items} offer={true} />
                                })
                                )
                                :null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default product_dft;