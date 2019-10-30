import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const HeaderCart = (props) =>{
    const [count,setCount] =useState(0);
    const [cartAdded,setCartAdded] =useState(null);
    useEffect(() => {
        setCartAdded(props.cartAdded)
        console.log('props.cartAdded',cartAdded)
      },[cartAdded]);

return(
    <div className="col-4 col-md-8 col-lg-3 top-nav-menu-wrap">
    <div className="top-nav-menu">
        <ul className="">
            <li className="sub-inner-menu">
                <img src={require('../../../assets/cart.png')} alt="" />
                <Link to={{pathname:"/"}}>My Cart
                  {` - ${props.cartLenght}`} 
                </Link>
            </li>
            <li className="sub-inner-menu">
                <Link to={{pathname:"/"}}>Accounts</Link>
                <ul>
                    <li className="">
                        <Link to={{pathname:"/"}}>1</Link>
                    </li>
                    <li className="">
                        <Link to={{pathname:"/"}}>2</Link>
                    </li>
                </ul>
            </li>
            <li className="inner-menu">
                <Link to={{
                    pathname: '/login',
                    state: {  }
                }} > Login</Link>
            </li>
        </ul>
    </div>
</div>
);
}

// class HeaderCart extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cartMenu: false,
//             cachedSomeProp: null,
//             count: 0
//         }
//     }

//     componentDidMount() {
//         if (this.props.cartAdded !== this.state.count) {
//             // this.setState({count:(this.props.cartAdded).length})
//             console.log('true')
//         }
//         else {
//             console.log(this.props.cartAdded, '!==', this.state.count)
//         }

//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log('props', props)
//         console.log('state', state)
//     }

//     render() {
//         // console.log('cachedSomeProp',this.state.cachedSomeProp);
//         return (
//             <div className="col-4 col-md-8 col-lg-3 top-nav-menu-wrap">
//                 <div className="top-nav-menu">
//                     <ul className="">
//                         <li className="sub-inner-menu">
//                             <img src={require('../../../assets/cart.png')} alt="" />
//                             <Link to={{ pathname: "/" }}>My Cart
//                                 {` - ${this.props.cartLenght}`} </Link>
//                             {/* <ul>
//                                 <li className="">
//                                     <Link to={{pathname:"/"}}>1 </Link>
//                                 </li>
//                                 <li className="">
//                                     <Link to={{pathname:"/"}}>2 </Link>
//                                 </li>
//                             </ul> */}
//                         </li>
//                         <li className="sub-inner-menu">
//                             <Link to={{ pathname: "/" }}>Accounts</Link>
//                             <ul>
//                                 <li className="">
//                                     <Link to={{ pathname: "/" }}>1</Link>
//                                 </li>
//                                 <li className="">
//                                     <Link to={{ pathname: "/" }}>2</Link>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="inner-menu">
//                             <Link to={{
//                                 pathname: '/login',
//                                 state: {}
//                             }} > Login</Link>
//                             {/* <ul>
//                                 <li className="">
//                                     <Link to={{pathname:"/"}}>Login</Link>
//                                 </li>
//                                 <li className="">
//                                     <Link to={{pathname:"/"}}></Link>
//                                 </li>
//                             </ul> */}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

function mapStateToProps(state) {
    const { test, cartAdded, cartLenght } = state.HeaderBarOne
    console.log(cartLenght, 'Change cart props', cartAdded)
    return {
        test, cartAdded, cartLenght
        // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
        //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
        // SomeoneReducer:state.SomeOne,
    };
}

export default connect(mapStateToProps, {
    // name of funcation whose in action here and top
    // loadData
})(HeaderCart)
// export default headerCart;