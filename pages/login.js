import React, { useState } from 'react';
import {signIn} from "next-auth/react" 

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form className="login-form">
            <input onChange={handleEmail} type="text" placeholder="Email"></input>
            <input onChange={handlePassword} type="password" placeholder="Password"></input>
            <button onClick={() => signIn(email, password)} >Login</button>
        </form>
    );
}
 
export default Login;