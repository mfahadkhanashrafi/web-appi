import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../../redux-saga/footer/subscribe/acctions';



const { loadData } = actions;

class Subscribe extends Component {
    constructor(props){
        super(props);

    }
    render(){
    return (
        <div className="sign-up">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="emailheading">
                            <h2>Know it all first!</h2>
                            <p>Never miss anything from Shrowsing by signing up to our newsletter.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="sign-up card-body">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" 
                                    onChange={(e)=>this.setState({email:e.target.value})}/>
                                <button className="btn btn-success" onClick={()=>this.submitSubscribe}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

function mapStateToProps(state){
    // console.log(state)
    const { test } = state.Subscribe;
    return {
        test
        // new name of reducer call on top '{all reducer state call seprate by ',' }=this.props.newName'
        //newName of Reducer :state_._root-wala-reducers_._reducer-ka-name OR {} = state.reducer ka name
        // SomeoneReducer:state.SomeOne,
    };
 }
export default connect(mapStateToProps,{
 // name of funcation whose in action here and top
 loadData
})(Subscribe);