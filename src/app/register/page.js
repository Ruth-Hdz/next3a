'use client'
import React from "react"
import "./Register.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Register} from "../../services/firebase/auth"


function Register() {

    const auth = getAuth(email,password);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

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

export {login,
     Register
}