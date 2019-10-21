import React, { Component } from 'react';
import Product from '../../product/index.product';
import fakeData from '../../../utils/fakeData';

class product_dft extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="standardBox">
                        {this.props.details && 'truerow' ? (
                            this.props.details.slice(0, 5).map((items, index) => {
                                return <Product />
                            })
                        ) : this.props.details ?
                                (this.props.details.map((items, index) => {
                                    return <Product />
                                })
                                )
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default product_dft;