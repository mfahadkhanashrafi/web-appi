import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class headerCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartMenu: false
        }
    }
    render() {
        return (
            <div className="col-4 col-md-8 col-lg-3 top-nav-menu-wrap">
                <div className="top-nav-menu">
                    <ul className="">
                        {/* <!-- <li><a href="faqs.php">FAQs</a></li>
										<li><a href="careers.php">Careers</a></li>
										<li><a href="feedback.php">Feedback</a></li> --> */}

                        <li className="sub-inner-menu">
                            <img src={require('../../../assets/cart.png')} alt="" />
                            <Link>My Cart</Link>
                            <ul>
                                <li className="">
                                    <Link>1 </Link>
                                </li>
                                <li className="">
                                    <Link>2 </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-inner-menu">
                            <Link>Accounts</Link>
                            <ul>
                                <li className="">
                                    <Link>1 </Link>
                                </li>
                                <li className="">
                                    <Link>2 </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default headerCart;