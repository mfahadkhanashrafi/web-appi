import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../redux-saga/dealsForToday/viewAllRow/acctions';

const { loadData } = actions;

class viewAllRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h4>{this.props.dealName}</h4>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="viewAll">
                            <div>
                                <Link to={{
                                    pathname: `offerList/${this.props.route}`, state: {
                                        dealName: this.props.dealName,
                                        api: this.props.api,
                                        apiData: this.props.apiData ? this.props.apiData : null
                                    }
                                }}>View All
                                <i className="fal fa-long-arrow-right"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { test } = state.dft_ViewAllRow;
    return {
        test
    }
}

export default connect(mapStateToProps, {
    loadData
})(viewAllRow)