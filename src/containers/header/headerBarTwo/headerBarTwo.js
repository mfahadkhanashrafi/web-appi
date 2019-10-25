import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../../redux-saga/header/headerBarTwo/acctions';
import fakeData from '../../../utils/fakeData';
import demoData from '../../../utils/demoData';
import menuDemoData from '../../../utils/menuDemoData';

const { loadData } = actions;
const DATA = (demoData[0].data);

class HeaderBarTwo extends Component {
    constructor() {
        super();
        this.state = {
            levelOneCat: [],
            mouseEnter: false,
        }
    }
    componentDidMount() {
        // this.genrateMenu();
        // this.handleJson();
    }

    handleJson = () => {
        var data = [
            { id: 1, categoryName: "Clothes", parent_id: 0, },
            { id: 2, categoryName: "Mens Cloth", parent_id: 1, },
            { id: 3, categoryName: "A11", parent_id: 2, },
            { id: 4, categoryName: "A12", parent_id: 2, },
            { id: 5, categoryName: "A13", parent_id: 2, },
            { id: 6, categoryName: "Electronic", parent_id: 0, },
            { id: 7, categoryName: "B1", parent_id: 1, },
            { id: 8, categoryName: "B11", parent_id: 7, },
            { id: 9, categoryName: "B12", parent_id: 7, },
            { id: 10, categoryName: "B13", parent_id: 7, }
        ];

        var root = {};
        var parentCache = {};
        data.map(val => {
            let category = val.categoryName
            var newObj = { "catName": category };
            newObj['children'] = [];
            if (val.parent_id != val.id) {
                        root[category] = newObj;
                        console.log('parent')
                    } else {
                        // XXX - if the parent isn't defined first this will fail
                        var parent = parentCache[val.parent_id];
                        console.log('notparent')
                        // parent.children.push(newObj);
                    }
            // data.forEach(element => {
            //     if (element.parent_id != val.id) {
            //         root[category] = newObj;
            //         console.log('parent')
            //     } else {
            //         // XXX - if the parent isn't defined first this will fail
            //         var parent = parentCache[element.parent_id];
            //         console.log('notparent')
            //         // parent.children.push(newObj);
            //     }
            //     // store this object in case it is a parent
            //     parentCache[category] = newObj;
            // });
        })
        // for each element definition in the data array
        console.log((root));
    }

    genrateMenu = () => {
        var root = document.createElement('ul'),
            currentParentId = 0,
            currentParentUl = root;

        const categories = menuDemoData.sort((a, b) => (a.categoryParentId < b.categoryParentId) ? -1 : 0)

        for (var i = 1; i < categories.length; ++i) {
            if (categories[i].categoryParentId !== currentParentId) {
                // console.log(categories[i].categoryName)
                currentParentId = categories[i].categoryParentId;
                currentParentUl = document.createElement('ul');
                root.getElementsByClassName('category_' + currentParentId)[0]
                    .appendChild(currentParentUl);
            }
            currentParentUl.innerHTML += '<li class="category_' + categories[i].categoryId + '">' + categories[i].categoryName + '</li>';
        }
        var cats = document.getElementById('cats');
        if (cats.firstChild) { cats.removeChild(cats.firstChild); }
        cats.appendChild(root);
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
        DATA.map((navVal,index) => {
            return (
                < li key={index} >
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
                                                                    <li style={{ marginLeft: '5px' }} >
                                                                        {navSubChild.subCat_child_sub ? <strong>{navSubChild.subCatChildName}</strong> : navSubChild.subCatChildName}
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
        let levelOneCat = DATA.map(navVal => {
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
                                                                return (<div key={'_'+navSubChild} >
                                                                    <li style={{ marginLeft: '5px' }} >
                                                                        {navSubChild.subCat_child_sub ? <strong>{navSubChild.subCatChildName}</strong> : navSubChild.subCatChildName}
                                                                    </li>
                                                                    {navSubChild.subCat_child_sub && navSubChild.subCat_child_sub.length > 0 ?
                                                                        navSubChild.subCat_child_sub.map(navSCS => {
                                                                            return (<li key={'_'+navSCS.subCat_child_subName} style={{ marginLeft: '25px' }} > {navSCS.subCat_child_subName} </li>)
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


        return (
            <div className="primary-nav">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="primary-menu">
                            <ul id="cats">
                                {levelOneCat}
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