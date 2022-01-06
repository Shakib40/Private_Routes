import {Link} from 'react-router-dom';

import React from 'react';
import {AuthContext} from '../context/AuthContext';


export const Navbar = () => {
    
    //handleLogin for ContextAPI
    const {username,isAuth , handleLogin} = React.useContext(AuthContext);
    
    const logoutNow = () => {
        handleLogin(false,"","");
    }

    return (    
        <div className="Navbar">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contactus">Contact</Link>

            <Link to="/products">Products</Link>

            <Link to="/users">Users</Link>

           { isAuth ?
                <a onClick={logoutNow}>Logout({username})</a> :
                <Link to="/login">Login</Link>
           }    

        </div>
        
    )
}
