import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from '../actions/authActions';

const Signup = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function submitHandler(e){
        e.preventDefault();

        const signupData = {
            name: firstName + " " + lastName,
            email,
            password
        }
        console.log("submitted", firstName, lastName, email, password);
        signupUser(signupData, history, dispatch);
    }

    return(
        <div className="signup container">
            <form className="form">
                <h1>Sign Up</h1>

                <input className="form-input" type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} value={firstName} />
                <input className="form-input" type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} value={lastName} />
                <input className="form-input" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
                <input className="form-input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                <input className="form-input" type="password" placeholder="Confirm Password" />
                <button type="submit" onClick={submitHandler}>Sign up</button>
            </form>
        </div>
    )
}

export default withRouter(Signup);