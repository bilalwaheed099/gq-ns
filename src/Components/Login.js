import React, { useState } from 'react';
import FormInput from '../utilities/FormInput';
import { loginUser } from '../actions/authActions';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const Login = () => {

    const history = useHistory();
    // const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitHandler(e){
        e.preventDefault();
        const loginData = {
            email,
            password
        }
        loginUser(loginData, history );//dispatch
    }

    return(
        <div className="login-container">
            <form className="form">
                <h1>Log In</h1>
                <input className="form-input" type="email" placeholder="Username" onChange={e => setEmail(e.target.value)} value={email} />
                <input className="form-input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                <br/><p style={{color:"red"}}><i>Incorrect username or password</i></p>
                <button type="submit" onClick={submitHandler}>Log in</button>
            </form>
        </div>
    )
}

export default Login;