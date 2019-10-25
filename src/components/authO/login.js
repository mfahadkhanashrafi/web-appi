import React, { useState } from 'react';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const Login = (props) => {
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
            // Axios.post('http://192.168.10.6/ecom/api/Users/GetUser', state,)
            //     .then(res => console.log('signup submit', res));
            Axios.post('https://jsonplaceholder.typicode.com/posts', {
                headers: { "Content-Type": "application/json" }, state
            })
                .then(responce => {
                    console.log('ressss', responce);
                    setRes({ ...res, competed: true, error: false });
                    localStorage.setItem('login_detail', JSON.stringify(state));
                    const data = JSON.parse(localStorage.getItem('login_detail'));
                })
                .catch(e => setRes({ ...res, competed: false, error: true }));
        } catch (e) {
            setRes({ ...res, competed: false, error: true })
        }
        // evt.preventDefault();
    }

    const [state, setState] = React.useState({
        Email: "",
        Password: ""
    });

    const [res, setRes] = useState({
        loading: false,
        error: false,
        competed: false
    });

    if (res.competed) {
        return <Redirect to={{ pathname: "/" }} />
    }

    if (res.error) {
        console.log('jigar')
    }

    return (<div className="login-form">
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
            <input type="text" className="form-control"
                placeholder="Email" required="required"
                name="Email" onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-control"
                placeholder="Password" required="required"
                name="Password" onChange={handleChange} />
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-block"
                onClick={handleSubmit}>Log in</button>
        </div>
        <p className="text-center">
            <Link to={{
                pathname: `signup`, state: {
                    signup: true
                }
            }}>Create an Account</Link>
        </p>
    </div>
    )
}

export default Login;
