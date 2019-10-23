import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function handleSubmit(evt) {
        // evt.preventdefault()
        localStorage.setItem('login_detail', JSON.stringify(state))
        const data = JSON.parse(localStorage.getItem('login_detail'));
        // if(data){
        //     <Link to='/'/>
        // }
    }
    const [state, setState] = React.useState({

        email: "",
        password: ""
    })

    return (<div class="login-form">
        <form>
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
                <input type="text" class="form-control"
                    placeholder="Username" required="required"
                    name="email" onChange={handleChange} />
            </div>
            <div class="form-group">
                <input type="password" class="form-control"
                    placeholder="Password" required="required"
                    name="password" onChange={handleChange} />
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block"
                    onClick={handleSubmit}>Log in</button>
            </div>
        </form>
        <p class="text-center">
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
