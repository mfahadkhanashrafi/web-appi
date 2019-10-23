import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function handleSubmit(evt) {
        // evt.preventdefault()
        console.log('state', state)
    }


    const [state, setState] = React.useState({
        userName: "",
        email: "",
        password: ""
    })

    return (<div class="login-form">
        <form >
            <h2 class="text-center">Sign Up</h2>
            <div class="form-group">
                <input type="text" class="form-control"
                    placeholder="Username" required="required"
                    name="userName"
                    value={state.userName} 
                    onChange={handleChange} />
            </div>
            <div class="form-group">
                <input type="email" class="form-control"
                    placeholder="Email" required="required"
                    name="email"
                    value={state.email}
                    onChange={handleChange} />
            </div>
            <div class="form-group">
                <input type="password" class="form-control"
                    placeholder="Password" required="required"
                    name="password"
                    value={state.password}
                    onChange={handleChange} />
            </div>
            <div class="form-group">
                <button  class="btn btn-primary btn-block"
                    onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        <p class="text-center">
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
