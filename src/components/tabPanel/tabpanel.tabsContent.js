import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Products from '../../components/product/index.product';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductView from '../product/productView';

// import actions from '../../redux-saga/tabPanel/acctions';

// const { loadData } = actions;

class TabsContent extends Component {
    render() {
        // console.log('datadatadatadata', this.props.data)
        if (this.props.left) {
            return (
                <div>
                    <div id="third" className="tab-pane">
                        <div id="first" className="tab-pane show active">
                            <div className="standardBoxMain">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="standardBox2 largeBox">
                                            <div className="boxImage large">
                                                <img src={require("../../assets/products/full-2.png")} alt="" />
                                            </div>
                                            <h6>fahad Golden Blue Shades</h6>
                                            <StarRatings rating={2.403}
                                                starDimension="20px"
                                                starRatedColor="orange"
                                                starSpacing="5px" />

                                            <div className="price">
                                                <p>PKR 1,500</p>
                                                <h5>PKR 3,500</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Row  */}
                                    <div className="col-md-7">
                                        <div className="row">
                                            {/* <ProductView key={index} item={items} id={items.category.type+'_'+index}/> */}
                                            {this.props.data.slice(0, 5).map((val, index) => {
                                                // console.log(val)
                                                return <ProductView key={index} item={val} />
                                            })}
                                            {/* upto */}
                                            <div className="col-md-4 col-sm-12">
                                                <Link to={{
                                                    pathname: `all/${this.props.route}/${this.props.viewAll.keyName}`, state: {
                                                        route: this.props.route,
                                                        products: this.props.data,
                                                    }
                                                }}>
                                                    <div className="boxVeiwAll">
                                                        <div className="text">
                                                            <p>WOMEN</p>
                                                            <h5>{this.props.viewAll.name}</h5>
                                                            <h4>View All</h4>
                                                            <div className="All">
                                                                <i className="fal fa-long-arrow-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div id="third" className="tab-pane">
                    <div id="first" className="tab-pane show active">
                        <div className="standardBoxMain">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        {/* <ProductView key={index} item={items} id={items.category.type+'_'+index}/> */}
                                        {this.props.data.slice(0, 5).map((val, index) => {
                                            // console.log(val)
                                            return <ProductView key={index} item={val} />
                                        })}
                                        {/* upto */}
                                        <div className="col-md-4 col-sm-12">
                                            <Link to={{
                                                pathname: `all/${this.props.route}/${this.props.viewAll.keyName}`, state: {
                                                    route: this.props.route,
                                                    products: this.props.data,
                                                }
                                            }}>
                                                <div className="boxVeiwAll">
                                                    <div className="text">
                                                        <p>WOMEN</p>
                                                        <h5>{this.props.viewAll.name}</h5>
                                                        <h4>View All</h4>
                                                        <div className="All">
                                                            <i className="fal fa-long-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Large */}
                                <div className="col-md-5">
                                    <div className="standardBox2 largeBox">
                                        <div className="boxImage large">
                                            <img src={require("../../assets/products/full-1.png")} alt="" />
                                        </div>
                                        <h6>fahad Golden Blue Shades</h6>
                                        <StarRatings rating={2.403}
                                            starDimension="20px"
                                            starRatedColor="orange"
                                            starSpacing="5px" />

                                        <div className="price">
                                            <p>PKR 1,500</p>
                                            <h5>PKR 3,500</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}

// function mapStateToProps(state) {
//     // console.log(state)
//     const { test } = state.TabsContent;
//     return {
//         test
//         // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
//         //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
//         // SomeoneReducer:state.SomeOne,
//     };
// }

// export default connect(mapStateToProps, {
//     // name of funcation whose in action here and top
//     loadData
// })(TabsContent);

export default TabsContent
