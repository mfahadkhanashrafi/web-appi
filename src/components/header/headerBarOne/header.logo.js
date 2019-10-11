import React from 'react';
import { Link } from 'react-router-dom';

let headerLogo = (props) => {
    return (
        <div className="col-3 col-md-2 col-lg-3">
            <div className="logo">
                <Link to="/">
                    <img src={require('../../../assets/logo.png')} alt="logo" />
                </Link>
            </div>
    </div>
    );
}

export default headerLogo;