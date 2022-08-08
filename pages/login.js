import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //const bcrypt = require("bcrypt")

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
            <button>Login</button>
        </form>
    );
}
 
export default Login;