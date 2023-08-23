import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/loginbutton.css';
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
        <div className="loginbg">
            <button className="loginbtn" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    );
};

export default LoginButton;
