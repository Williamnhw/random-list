import React from 'react';

const Login = (props) => {
  return (
    <form onSubmit={props.login}>
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
