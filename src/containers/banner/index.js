import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux-saga/header/headerBarOne/acctions';

import BrandBanner from '../../components/banner/brandBanner';

const { loadData } = actions;

class Banner extends Component {
    render() {
        if (this.props.mainHome) {
            return (
                <div className="home_slider">
                    <div className="container">
                        <img src={require('../../assets/home-slider.jpg')} alt="" />
                    </div>
                </div>
            )
        }
        if (this.props.brandBanner) {
            return (
                <div className="brandBanner">
                    <div className="container">
                        <div className="row">
                            <BrandBanner explore={true} />
                            <BrandBanner buy={true} />
                        </div>
                    </div>
                </div>
            )
        }
        if (this.props.fullBanner) {
            return(
            <div className="full-banner">
                <div className="container">
                    <div className="full-banner-wrap">
                        <BrandBanner fullBanner={this.props.fullBanner} 
                        name={this.props.name}
                        offUpto={this.props.offUpto}
                        oldPrice={this.props.oldPrice}
                        newPrice={this.props.newPrice}
                        validity={this.props.validity}  />
                    </div>
                </div>
            </div>
            )
        }
        if (this.props.sale) {
            return(
            <div className="sale">
                <div className="container">
                    <div className="row">
                        <BrandBanner css={'saleMainWrap bg-gray'}
                            sale={this.props.sale} 
                            nameCss = {'color-darkblue'}
                            name={this.props.name}
                            price={this.props.price} />
                        <BrandBanner  css={'saleMainWrap bg-lightgray'}
                            sale={this.props.sale} 
                            nameCss={'color-yellow'}
                            name={this.props.name}
                            price={this.props.price} />
                    </div>
                </div>
            </div>
            )
        }
    }
}


function mapStateToProps(state) {
    const { test } = state.Banner;
    return {
        test
        // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
        //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
        // SomeoneReducer:state.SomeOne,
    };
}

export default connect(mapStateToProps, {
    // name of funcation whose in action here and top
    loadData
})(Banner)