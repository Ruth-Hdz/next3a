"use client"
import { useState } from "react";
import "./register.css"

export default function register(){
    
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


            <button>register</button>  
            </div>

)
}
