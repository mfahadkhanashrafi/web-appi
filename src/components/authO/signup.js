import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';


import actions from '../../redux-saga/dealsForToday/acctions';

const { loadData } = actions;

const Signup = () => {
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function handleSubmit(evt) {
        // console.log('state', state);
        try {
            // Axios.post('http://192.168.10.6/ecom/api/Users/Add', state,)
            //     .then(res => console.log('signup submit', res));
            Axios.post('https://jsonplaceholder.typicode.com/postssss', state)
                .then(responce => setRes({ ...res, competed: true, error: false }))
                .catch(e=>setRes({ ...res, competed: false, error: true }));
        } catch (e) {
            setRes({ ...res, competed: false, error: true })
        }
        // evt.preventDefault();
    }

    const [state, setState] = useState({
        FirstName: "",
        Email: "",
        Password: ""
    });
    const [res, setRes] = useState({
        loading: false,
        error: false,
        competed: false
    });
    if (res.competed) {
        return <Redirect to={{ pathname: "/login" }} />
    }
    if (res.error) {
         console.log('jigar')
    }
    return (<div className="login-form">
        <h2 className="text-center">Sign Up</h2>
        <div className="form-group">
            <input type="text" className="form-control"
                placeholder="Username" required="required"
                name="FirstName"
                value={state.FirstName}
                onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="email" className="form-control"
                placeholder="Email" required="required"
                name="Email"
                value={state.Email}
                onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-control"
                placeholder="Password" required="required"
                name="Password"
                value={state.Password}
                onChange={handleChange} />
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-block"
                onClick={handleSubmit}
            >Submit</button>
        </div>
        <p className="text-center">
            <Link to={{
                pathname: `login`, state: {
                    signup: false
                }
            }}>Already Account Login</Link>
        </p>
    </div>
    )
}

export default Signup;
// function mapStateToProps(state) {
//     const { products, loading, error } = state.DealsForToday;
//     return {
//         products, loading, error,
//     }
// }

// export default connect(mapStateToProps, {
//     loadData
// })(DealsForToday)