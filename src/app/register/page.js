'use client'
import { useState} from "react"; 
import { TextField, Stack} from '@mui/material'; 

export default function Register () {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event)=>{
        const {name , value} = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <Stack
        width="500px"
        spacing={2}
        px="10px"
        mx={4}

        >

            <TextField 
            onChange= {handleChange} 
            name="email" 
            type="text" 
            value={state.email}
            label="email"
             />
            <TextField 
            onChange={handleChange} 
            name="password" 
            type="password" 
            label="12345"
            />
            <button variant="">Register</button>
        </Stack>
    )
}

