import { Button } from '@material-ui/core';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
        <div>
        <Row className="App">
        <Col className="img__Company " xs lg="7">
          <img
            className='Icon__image'
            src="https://www.svgrepo.com/show/6995/chat.svg"
            alt="PleaseCheck your Network Connection"
            height={400} />
        </Col>
        <Col xs lg="5" className="logForm">
          <div className='Form'>
          <img  className='logform__icon' src="https://www.svgrepo.com/show/6995/chat.svg" alt="" height={80} />
         
          <h5 className='LogForm__Heading'>Chat's Begin</h5>
          <div className="logContent">
            <h4>Join With Us.</h4>
            
            <div className='button'>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" />
              <button  onClick={signIn}>Sign up with Google</button>
            </div>
            
            <div className='button'>
            <img src="https://www.svgrepo.com/show/158427/facebook.svg" alt="" />
              <button>Sign up with Facebook</button>
            </div>
  
            <p>~~~~~~~~~~~~~~or~~~~~~~~~~~~~</p>
            <div className='Log__button'>
              <button className='Log__phone'>Sign up with phone</button>
            </div>
            <p></p>
          </div>
          <div className="Signin">
            <h2>Already have an Account</h2>
            <div className='sign__button'>
             
              <button>Sign up With Facebook</button>
            </div>
          </div>
          </div>
        </Col>
  
      </Row>
      </div>
        // <div className="login">
        //    <div className="login">
        //    <div className="login_container">
        //        <img src="https://static.vecteezy.com/system/resources/previews/007/802/398/non_2x/realistic-smartphone-chatting-3d-icon-illustrations-vector.jpg" alt=""/> 
        //         <div className="login_text">
        //             <h1>Sign Into Private Talk</h1>
        //         </div>
        //         <Button type="submit" onClick={signIn}>Sign in With Google</Button>
        //    </div>
        // </div>
        // </div>
    );
}

export default Login
