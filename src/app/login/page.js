"use client"
import { useState } from "react";
import "./login.css"

export default function login(){
    
  const [state, setEstate] = useState({
    email:"",
    password:""
});

    const handleChange = (event)=>{
        const{name,value}= event.target;
        setEstate({
            ...state,
            [name]:value
        })
    }
    return (
        <div className="container">
            <input onChange={handleChange} name="email" value={state.email} type="text" placeholder="email"/> 
            <input type="password" placeholder="123456"/>

            <button>login</button>  
            </div>
    )
}