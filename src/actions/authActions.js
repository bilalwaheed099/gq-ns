import axios from 'axios';

export const signupUser = (userData, history, dispatch) => {
    //make the axios request
    axios.post('http://localhost:5000/api/users', userData)
        .then( res => {
            console.log(res.status)
            history.push('/login');
        })
        .catch(err => {
            //TODO: dispatch function
            console.log(err)
        })
}

export const loginUser = (userData, history, dispatch) => {
    //make the axios request
    axios.post('http://localhost:5000/api/users/login', userData)
        .then(res => {
            console.log(res.status);
            console.log(res);
            const token = res.data.token
            // Here we get the token in response that needs to be sent for private routes
            // TODO: store the token in localstorage for the time the user is logged in
            history.push('/dashboard');
        })
        .catch(err => {
            //TODO: dispatch function
            console.log(err.response.data)
        })
}
