import {Link} from 'react-router-dom';

import React from 'react';
import {AuthContext} from '../context/AuthContext';
import {PrivateRoute} from './PrivateRoute';

export const Navbar = () => {
    
    //handleLogin for ContextAPI
    const {username,isAuth , handleLogin} = React.useContext(AuthContext);
    
    const logoutNow = () => {
        handleLogin(false,"","");
    }

    return (    
        <div className="Navbar">

            <Link to="/">Home</Link>

            <Link to="/products">Products</Link>

            <Link to="/users">Users</Link>

           { isAuth ?
                <a onClick={logoutNow}>Logout({username})</a> :
                <Link to="/login">Login</Link>
           }

           {isAuth ?
                <>
                <Link to="/dashboard">Dashboard</Link> 
                <Link to="/dashboard/settings">Settings</Link>
                </> : null 
            }    
              

        </div>
        
    )
}
