import React from 'react';

const Login = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = event.target;
        props.login(email.value, password.value);
    }

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <input id='email' type='email' placeholder='Email' />
        </div>
        <div>
            <input id='password' type='password' placeholder='Password' />
        </div>
        <div>
            <button type='submit' id='loginBtn' >Login</button>
        </div>
    </form>
    )
}

export default Login;
