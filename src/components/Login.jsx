import React from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import {Register} from './Register';

export const Login = () => {
    
    const {handleLogin} = React.useContext(AuthContext);
    
    const location = useLocation();
    const navigate = useNavigate();

    const [form , setForm] = React.useState({
        username : "",
        password: "", 
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
           ...form,
            [name] : value,
        });
    };

            
    const onSubmit =(e) => {
        e.preventDefault();
        console.log(form);
        const token = Date.now() + form.username; 

        handleLogin(true , token , form.username);
        navigate("/");
        
    } 

    return (
        <div>
        <form onSubmit={onSubmit}>
           <input onChange={handleChange} type="text"  name="username" placeholder="Username" />
           <input onChange={handleChange}type="text"  name="password" placeholder="Password" />
           <input value = "submit" type="submit"/>
           

        </form>
        <Register/>
        </div>
    )
};