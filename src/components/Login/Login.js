import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { getGoogleSignIn, initializeFrameWork } from '../Auth/LoginManager';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    initializeFrameWork();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        success: false
    })

    const handleGoogleSignIn = () => {
        getGoogleSignIn()
        .then(res => {
            setUser(res)
            setLoggedInUser(res)
            history.replace(from)
            console.log(res)
        })
    }


    return (
        <div className="p-5 text-center" style={{height: '60vh'}}>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign In with Google</button>
        </div>
    );
};

export default Login;