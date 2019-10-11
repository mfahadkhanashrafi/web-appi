import React from 'react';
import StarRatings from 'react-star-ratings';
import scrollTop from '../utils/scrollTop';
import ProductImages from '../components/product/image.product';

let propductDetail = (props) => {
    scrollTop();
    // console.log(props.location.state.data)
    let { name, rating, images,imagesArr } = (props.location.state.data);
    return (
        <div className="product-details">
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-4">
                        <div className="side-menu">
                            //  Image thumbnail 
                            <img src={images.image1} />
                        </div>
                    </div> */}
                    <ProductImages p_img={images} imagesArr={imagesArr} />
                    {/*  */}
                    <div class="col-md-7">
                <div class="productDetailWrap">
                    <div class="product-overview">
                    <div id="portal" />
                        <p class="new">New!</p>
                        <h5>Quickdry Men Round Neck T-Shirt</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
                        <div class="ratingStars">
                            <i class="fas fa-star color-yellow"></i>
                            <i class="fas fa-star color-yellow"></i>
                            <i class="fas fa-star color-yellow"></i>
                            <i class="fas fa-star color-yellow"></i>
                            <i class="fas fa-star-half color-yellow"></i>
                            <p>(4.3)</p>
                            <p>2,141 Ratings</p>
                            <span>|</span>
                            <p>2,304 Orders</p>
                            
                        </div>
                        <div class="price">
                            <p>PKR 2,500</p>
                            <h5>PKR 5,000</h5>
                            <span>50% Off</span>
                        </div>
                    </div>

                    <div class="detailed-specifications">
                        <div class="specRow">
                            <div class="row">
                                <div class="col-md-3 col-sm-12">
                                    <h6>Highights</h6>
                                </div>
                                <div class="col-md-9 col-sm-12">
                                    <div class="bullets">
                                        <ul>
                                            <li>Cotton Blend Fabric</li>
                                            <li>Regular Fit Round Neck T-shirt</li>
                                            <li>Printed Pattern</li>
                                            <li>Full Sleeve</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="specRow">
                            <div class="row">
                                <div class="col-md-3 col-sm-12">
                                    <h6>Description</h6>
                                </div>
                                <div class="col-md-9 col-sm-12">
                                    <p>High quality Printed RoundNeck Full sleevesTshirt direct from the manufacturers. 100% Pure combed 155 - 160 GSM Cotton used. Gives you perfect fit, comfort feel and handsome look. Trusted brand online and no compromise on quality</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="specRow">
                            <div class="row">
                                <div class="col-md-3 col-sm-12">
                                    <h6>Specification</h6>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <p>Type</p>
                                    <p>Sleeve</p>
                                    <p>Fit</p>
                                    <p>Fabric</p>
                                    <p>Pack of</p>
                                    <p>Style Code</p>
                                    <p>Neck Type</p>
                                    <p>Ideal For</p>
                                    <p>Size</p>
                                    <p>Pattern</p>
                                    <p>Brand Fit</p>
                                    <p>Fabric Care</p>
                                    <p>Color</p>
                                    
                                </div>
                                <div class="col-md-5 col-sm-12">
                                    <p>Round Neck</p>
                                    <p>Full Sleeve</p>
                                    <p>Regular</p>
                                    <p>Cotton Blend</p>
                                    <p>1</p>
                                    <p>TNV-RNFULABSTRACT1</p>
                                    <p>Round Neck</p>
                                    <p>Men</p>
                                    <p>M</p>
                                    <p>Printed</p>
                                    <p>Western Wear</p>
                                    <p>Regular Machine Wash</p>
                                    <p>Navy Blue</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="specRow">
                            <div class="row">
                                <div class="col-md-3 col-sm-12">
                                    <h6>More INFO</h6>
                                </div>
                                <div class="col-md-9 col-sm-12">
                                    <p>Manufacturing, Packaging and Import info...</p>
                                    
                                </div>
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

export default propductDetail;


