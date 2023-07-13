'use client'
import React from "react"
import "./login.css"

function Login() {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        
        setState({
            ...state,
            [name]: value
        })
    }

    function onLogin() {
        const {email, password} = state;
        Login(email, password)
    }

    return (
        <div className="container">
            <input onChange={handleChange} name="email" type="text" value={state.email} />
            <input onChange={handleChange} name="password" type="password" value={state.password} />
            <button onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login;