import React from 'react';
import {Link} from 'react-router-dom';

export const Users = () => {
    const [users,setUsers] = React.useState([]);

    const getUsers = () => {
        fetch("http://localhost:3001/users")
        .then((d) => d.json())
        .then((res) =>{ setUsers(res)});
    };
    
    React.useEffect(() =>{
        getUsers()
    },[]);

    
    return(
        <>
        <div className="productList">
         {users.map((e ,i) =>
             <Link key={i} to={`/users/${e.id}`}>{e.username}</Link>
         )}
         </div>
        </>
    )
};
