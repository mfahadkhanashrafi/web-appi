import React, { Component } from 'react';

class headerSearch extends Component {
    render() {
        return (
            <div className="col-8 col-sm-6">
                <div className="search">
                    <div className="search-icon">
                        <i className="fal fa-search"></i>
                    </div>
                    <div className="input-bar">

                        <input className="form-control"
                            // onkeypress="search(event,this.value)"
                            type="text"
                            name=""
                            id="searchbox"
                            placeholder="Search prodcuts, brands & more" />

                        {/* <!-- <gcse:searchbox-only resultsUrl="search.php"> --> */}
                    </div>
                    <div className="search-btn">
                        <button type="button"  className="btn btn-success" >Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default headerSearch;