import {useContext} from 'react';
import {Navigate , Route} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export const PrivateRoute = ( {children} ) => {
    const {token } = useContext(AuthContext);
    // console.log("Token",token);

    if(token) {
        return <Navigate to={"/login"}/>
    }
    return children;
}
