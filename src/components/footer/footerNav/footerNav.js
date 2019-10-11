import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop  } from '../../../utils/scrollTop';
import FooterSocial from './footer.social';
 


const FooterNav = (props) => {
    const setScrollToTop = useScrollToTop(true);

    return (
        <div className="row">
            <div className="col-md-4 col-lg-4">
                <div className="footer-company">
                    <div className="footer-company-logo">
                        <Link to='/'>
                            <img src={require('../../../assets/logo.png')} />
                        </Link>
                    </div>
                    <div className="footer-company-detail">

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-sm-12">
                <div className="footer-link">
                    <h4>ABOUT</h4>
                    <ul>
                        <li>
                            <Link> Contact</Link>
                        </li>
                        <li>
                            <Link> About</Link>
                        </li>
                        <li>
                            <Link> Shrowsing Stories</Link>
                        </li>
                        <li>
                            <Link> Press</Link>
                        </li>


                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-sm-12">
                <div className="footer-link">
                    <h4>HELP</h4>
                    <ul>
                        <li>
                            <Link>Payment</Link>
                        </li>
                        <li>
                            <Link>Shipping</Link>
                        </li>
                        <li>
                            <Link>Cancellation & Returns</Link>
                        </li>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Report Infringement</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className="footer-link">
                    <h4>Privacy Policy</h4>
                    <ul>
                        <li>
                            <Link>Return Policy</Link>
                        </li>
                        <li>
                            <Link>Terms Of Use</Link>
                        </li>
                        <li>
                            <Link>Security</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Site Map</Link>
                        </li>
                        <li>
                            <Link>EPR Compliance</Link>
                        </li>
                    </ul>
                </div>
            </div>


            <FooterSocial />
            <div className="col-lg-12">
                <div className="container">
                    <div className="btn btn-success toTop" style={{display:'block'}} 
                    onClick={() => setScrollToTop(true)}>BACK TOP <i className="fal fa-long-arrow-right"></i></div>
                </div>
            </div>
        </div>
    );
}

export default FooterNav;