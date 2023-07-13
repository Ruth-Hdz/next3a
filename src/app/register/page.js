'use client'
import React from "react"
import "./Register.css"

function Register() {

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

    function onRegister() {
        const {email, password} = state;
        Register(email, password)
    }

    return (
        <div className="container">
            <input onChange={handleChange} name="email" type="text" value={state.email} />
            <input onChange={handleChange} name="password" type="password" value={state.password} />
            <button onClick={onRegister}>Register</button>
        </div>
    )
}

export default Register;