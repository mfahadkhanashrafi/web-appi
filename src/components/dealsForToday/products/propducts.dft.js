import React, { Component } from 'react';
import Product from '../../product/index.product';
import fakeData from '../../../utils/fakeData';

class product_dft extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let size = this.props.row;
        return (
            <div className="container">
                <div className="row">
                    <div className="standardBox">
                        { this.props.row && this.props.details ?(
                            this.props.details.slice(0,5).map((items,index)=>{
                            return <Product key={index} item={items} id={items.category.type+'_'+index} />
                        }) ): this.props.details ?(this.props.details.map((items, index) => {
                        return <Product key={index} item={items} id={items.category.type+'_'+index} />
                        }) ):<Product item={null}  />}
                       
                        {/* <Product /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default product_dft;