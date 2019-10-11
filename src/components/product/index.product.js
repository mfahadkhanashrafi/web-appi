import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Product extends Component {

    render() {
        // console.log(this.props.item)
        if (this.props.item === null) {
            return <h1>No Data Here</h1>
        } else {
            const { name, size, newProduct, brand, price, rating, images, discount, category } = this.props.item;

            return (
                <Link 
                 to={{
                    pathname: `/details/${category.type}/${this.props.id}`,
                    state: {
                        data: this.props.item
                    }
                }}
                >
                    {/* this tag replaced by uper wala div */}
                    <div className="standardBox1">
                        <div className="boxImage">
                            <img src={images.image1} alt="" />
                        </div>
                        <div className="contentWrap">
                            <div className="contnetOne">
                                <h6>{name}</h6>
                                <p>From {brand}</p>
                                <span>{newProduct ? 'New !' : null}</span>
                            </div>
                            <div className="contnetTwo">
                                <h6>starting at <span> PKR {price}</span></h6>
                                {discount ? <p>With  additional <span>+20%</span> discount</p> : null}
                            </div>
                        </div>
                    </div>
                </Link>
            )
        }
    }
}

export default Product;