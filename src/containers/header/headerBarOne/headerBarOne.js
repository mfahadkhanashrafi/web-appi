import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux-saga/header/headerBarOne/acctions';

import HeaderLogo from '../../../components/header/headerBarOne/header.logo';
import HeaderSearch from '../../../components/header/headerBarOne/header.search';
import HeaderCart from '../../../components/header/headerBarOne/header.cart';

class HeaderBarOne extends Component {
       state = {
           count:0
       }
    render() {
        return (
            <div className="top-nav">
                <div className="row">
                    {/* Logo Component */}
                    <HeaderLogo />
                    <HeaderSearch />
                    <HeaderCart count={this.state.count} />
                </div>
                
            </div>
        );
    }
}

export default HeaderBarOne