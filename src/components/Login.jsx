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
        <section className="Login-section">
            <div>
                <form onSubmit={onSubmit}>
                    
                    <table >
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td><input onChange={handleChange} type="text"  name="username" placeholder="Username" /></td>
                            </tr>

                            <tr>
                                <td>Password</td>
                                <td><input onChange={handleChange}type="text"  name="password" placeholder="Password" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><input value = "submit" type="submit"/></td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div>

            <div> <Register/> </div>

        </section>
    )
};