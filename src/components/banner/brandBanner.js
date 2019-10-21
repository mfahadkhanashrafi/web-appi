import React from 'react';
import { Link } from 'react-router-dom';

let brandBanner = (props) => {
    if (props.explore) {
        return (
            <div className="col-md-6 col-sm-12">
                <div className="halfImg">
                    <img src={require('../../assets/half-banner/1.jpg')} alt="" />
                </div>
                <div className="halfBannerContent curve bg-blue">
                    <div className="logo">
                        <img src={require('../../assets/brand-logos/1.png')} alt="" />
                    </div>
                    <div className="color-lightgray">
                        <h3>Lowest prices on Brand Stilettos</h3>
                        <p>Upto <span>45% </span> off</p>

                    </div>

                    <div className="all">
                        <Link className="color-lightgray">Explore Now <i className="fal fa-long-arrow-right"></i></Link>
                    </div>


                </div>
            </div>
        )
    }
    if (props.buy) {
        return (
            <div className="col-md-6 col-sm-12">
                <div className="halfImg">
                    <img src={require('../../assets/half-banner/2.jpg')} alt="" />
                </div>
                <div className="halfBannerContent bg-yellow">
                    <div className="logo">
                        <img src={require('../../assets/brand-logos/2.png')} alt="" />
                    </div>
                    <h3>Up to 29% Discount on T-Shirts</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                    <div className="all">
                        <Link to="" className="color-black">Buy Now <i className="fal fa-long-arrow-right"></i></Link>
                    </div>

                </div>
            </div>
        )
    }
    if (props.fullBanner) {
        return (<div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
                <div className="banner-text card-body">
                    <h2>{props.name}</h2>
                    <p>Upto <span>{props.offUpto}%</span> off</p>

                    <div className="price">
                        <p>PKR {props.newPrice}</p>
                        <h5>PKR {props.oldwPrice}</h5>
                        <h6>*Valid till {props.validity}</h6>
                    </div>
                    <div className="all">
                        <Link to="">Check them out! <i className="fal fa-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="banner-image">
                    <img src={require('../../assets/banners/1.png')} alt="" />
                </div>
            </div>
        </div>
        )
    }
    if (props.sale) {
        return (
            <div className="col-md-6 col-sm-12">
                <div className={props.css}>
                    <h2 className={props.nameCss}>{props.name}</h2>
                    <img src={props.nameCss === 'color-yellow' ?require('../../assets/sale/2.png'):require('../../assets/sale/1.png')} alt="" />
                    <h3>1500/- PKR</h3>
                </div>
            </div>
        )
    }
}

export default brandBanner;