import React from 'react';

const AddtoCart = () =>(
    <div class="container">
    <div class="cart">
        <div class="row">
            <div class="col-md-8 col-sm-12">
                <div class="card-heading">
                    <div class="row">
                        <div class="col-md-2 col-sm-6">
                            <h5>My Cart <span>(2)</span></h5>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <h5>My Wishlist <span>(8)</span></h5>
                        </div>
                        <div class="col-md-6">
                            <div class="delivery">
                                <form class="form-inline">
                                    <p>Delivery to</p>
                                    <i class="fas fa-map-pin"></i>
                                    <input class="form-control" type="search" placeholder="Enter delivery pin code" aria-label="Search"/>
                                    <button class="btn " type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-wrap">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="card-image">
                                <img src="images/products/card.png" alt="" />
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="card-content">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="content-box">
                                            <h6>QuickDry Marine Men Round Neck T-Shirt</h6>
                                            <div class="size-color">
                                                <div class="size">
                                                    <span>S</span>
                                                    <h6>Size</h6>
                                                </div>
                                                <div class="color">
                                                    <span></span>
                                                    <h6>Color</h6>
                                                </div>
                                            </div>
                                            <div class="delivery-days">
                                                <h6>Usually delivered in 7-8 days  <span>?</span></h6>
                                                <p>Enter pincode for exact delivery dates/charges</p>
                                               
                                            </div>
                                            <button class="remove">REMOVE</button>
                                            <button class="save">SAVE TO WISHLIST</button>
                                        </div>
                                    </div>
                                    <div class="col-md-4">

                                        <div class="counter-box">
                                            <h6>QTY</h6>
                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        <div class="price-box">
                                            <h4>PKR 2,500</h4>
                                            <div class="price">
                                                <p>50% Off</p>
                                                <h5>PKR 5,000</h5>
                                            </div>
                                            <div class="Offer-applied">
                                                <span>1</span>
                                                <p>Offer applied</p>
                                                <h6>?</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12"></div>
        </div>
    </div>
</div>
)

export default AddtoCart;