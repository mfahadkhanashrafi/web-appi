import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick/lib/slider";
import { NavLink } from 'react-router-dom';
import TabContent from './tabpanel.tabsContent';
import fakeData from '../../utils/fakeData';

// import actions from '../../redux-saga/tabPanel/acctions';

// const { loadData } = actions;
var newFkData = ''
class TabMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabMenu:{ name: 'Clothing & Apparel', keyName: 'c&a' },
    }
  }
  onClick = (e, subCat) => {
    e.preventDefault();
    // console.log('menuClick')
    this.setState({ activeTabMenu: subCat});
  }

  render() {
    // console.log(this.props.tabMenu);

    if (this.state.activeTabMenu) {
      var newFk = fakeData[this.props.route];
      let subCat = this.state.activeTabMenu.keyName ;
      newFkData = newFk.filter(function (hero) {
        return hero.category.subCat === subCat;
      });
      // console.log('newFkData',newFkData);
    }

    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (<div>
      <Slider
        // className="nav nav-tabs"
        ref={c => (this.slider = c)}
        style={sliderStyle}
        {...settings}>

        {this.props.tabMenu.map((value, index) => {
          return <li key={index}>
            <NavLink style={value.keyName == this.state.activeTabMenu.keyName ? { color: "red" } : null} activeClassName="active"
              onClick={(e) => this.onClick(e, value)}

              to={{
                pathname:  `?${this.props.route}#${value.name}`, state: {
                  products: fakeData[this.props.route],
              }
               
              }}

              data-toggle="tab" >{value.name}</NavLink>
          </li>
        })}

      </Slider>

      <TabContent left={this.props.left} data={newFkData} viewAll={this.state.activeTabMenu} route={this.props.route} />

    </div>
    )
  }

}

// function mapStateToProps(state) {
//     // console.log(state)
//     const { test } = state.TabMenu;
//     return {
//         test
//         // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
//         //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
//         // SomeoneReducer:state.SomeOne,
//     };
// }

// export default connect(mapStateToProps, {
//     // name of funcation whose in action here and top
//     loadData
// })(TabMenu);

const sliderStyle = {
  borderBottom: 0,
  width: '30%',
  position: 'absolute',
  zIindex: 9,
  right: 0,
  top: '-42px',
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  // console.log('onClick', onClick);
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: '100%' }}
      onClick={onClick}
    />
  );
}

export default TabMenu;


