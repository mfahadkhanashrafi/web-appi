import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../../redux-saga/header/headerBarTwo/acctions';
import fakeData from '../../../utils/fakeData';
import demoData from '../../../utils/demoData';

const { loadData } = actions;
const DATA = (demoData[0].data);
class HeaderBarTwo extends Component {
    constructor() {
        super();
        this.state = {
            levelOneCat: [],
            mouseEnter: false,
        }
        console.log('demoData', DATA)

    }
    componentDidMount() {
        // this.handleMenuBarData();
    }

    handleMenuBarData = async () => {
        let childArr = {}, subChild = [], parrent = {}, newData = [];
        demoData.map((v, i) => {
            if (v.CategoryLevel === 1 && v.CategoryParentId < 1) {
                newData.push(v)
            }
            if (v.CategoryLevel === 2 && v.CategoryParentId === 1) {
                newData['child'] = newData.push(v)
            }

        });
        // await this.setState({levelOneCat:newData})
        this.setState({ levelOneCat: newData })
    }

    onMouseEnterHandle = (_pid) => {
        let childArr = [], subChild = [], parrent = {};
        this.setState({ mouseEnter: true });
        demoData.map((v, i) => {
            if (v.CategoryParentId === _pid.CategoryId) {
                childArr[v.CategoryName] = v
                // this.state.levelOneCat[]
                // newData[newData.indexOf(_pid)].connect(childArr)
                console.log(childArr[v.CategoryName])
                //    newData[].push()
            }
        })
    }

    menuValue = () => {
        DATA.map(navVal => {
            return (
                < li >
                    <Link>
                        {navVal.categoryName}
                    </Link>
                    <div className="menu-open-btn"></div>
                    <div className="mega-menu company">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 menu-res-hide">
                                    <div className="menu-text-box">
                                        {navVal.subCat && navVal.subCat.length > 0 ?
                                            navVal.subCat.map(navSub => {
                                                return (<div>
                                                    <li><strong>{navSub.subCatName}</strong></li>
                                                   {navSub.subCatChild && navSub.subCatChild.length > 0 ?
                                                        navSub.subCatChild
                                                            .map(navSubChild => {
                                                                return (<div>
                                                                    <li style={{ marginLeft: '5px'}} >
                                                                         {navSubChild.subCat_child_sub?<strong>{navSubChild.subCatChildName}</strong>:navSubChild.subCatChildName} 
                                                                         </li>
                                                                    {navSubChild.subCat_child_sub && navSubChild.subCat_child_sub.length > 0 ?
                                                                        navSubChild.subCat_child_sub.map(navSCS => {
                                                                            return (<li style={{ marginLeft: '25px' }} > {navSCS.subCat_child_subName} </li>)
                                                                        }) : null}
                                                                </div>)
                                                            }) : null}
                                                </div>)
                                            }) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li >
            )
        });
    }


    render() {
        // console.log('parrent levelOneCat', this.state.levelOneCat);
        let childArr = [], subChild = [], parrent = {}

        let inner = '';

        // Alamdar Json Responce
        // let levelOneCat = this.state.levelOneCat.map(v => {
        //     return <li onMouseEnter={() => this.onMouseEnterHandle(v)}
        //         onMouseLeave={() => this.setState({ mouseEnter: false })}>
        //         <Link to='/'>{v.CategoryName}</Link></li>
        // });

        // Fahad Json Responce
        let levelOneCat = '';


        return (
            <div className="primary-nav">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="primary-menu">
                            <ul>

                                {levelOneCat}
                                {/* <li>
                                    <Link>
                                        Women
                                    </Link>
                                    <div className="menu-open-btn"></div>
                                    <div className="mega-menu company">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 menu-res-hide">
                                                    <div className="menu-text-box">
                                                        <h5>Clothing</h5>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <h5>Clothing</h5>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <h5>Clothing</h5>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <h5>Clothing</h5>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <h5>Clothing</h5>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <h5>Clothing</h5>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <p>kurti</p>
                                                        <Link> view all <i className="fal fa-long-arrow-right"></i></Link> 
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="menu-link-box">
                                                        <Link>
                                                            <h5>women</h5>
                                                            <p></p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to={{
                                        pathname: 'men', state: {
                                            products: fakeData['men'],
                                        }
                                    }}>Men</Link>
                                </li>
                                <li>
                                    <Link to='/'>Electronic & Appliances </Link>
                                </li>
                                <li>
                                    <Link to='/'>Deals & Offers</Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="top-nav-menu float-right">
                            <ul>
                                <li className="sub-inner-menu"><Link>More</Link>
                                    <ul>
                                        <li className="">
                                            <Link to='/'>1 </Link>
                                        </li>
                                        <li className="">
                                            <Link to='/'>2 </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="row">
                            <div className="col-3 col-sm-5">
                                <div className="responisve-menu-btn"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    const { test } = state.HeaderBarTwo
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
})(HeaderBarTwo)

// export default HeaderBarOne