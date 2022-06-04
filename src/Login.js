import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
           <div className="login">
           <div className="login_container">
               <img src="https://static.vecteezy.com/system/resources/previews/007/802/398/non_2x/realistic-smartphone-chatting-3d-icon-illustrations-vector.jpg" alt=""/> 
                <div className="login_text">
                    <h1>Sign Into Private Talk</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
        </div>
    );
}

export default Login
