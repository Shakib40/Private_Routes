import React from 'react';
import { useParams } from "react-router-dom";
export const  UserDetails = () => {

    const [users,setUsers] = React.useState({});
    const {usersId} = useParams();

    const getUsersDetails =() => {
        fetch(`http://localhost:3001/users/${usersId}`)
        .then((d) => d.json())
        .then((res) =>{ setUsers(res) });
    }
    
    React.useEffect(() =>{
        getUsersDetails()
    },[]);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>{users.id}</td>
                        <td>{users.username}</td>
                        <td>{users.password}</td>
                        <td>{users.age}</td>
                        <td>{users.address}</td>
                        <td>{users.department}</td>
                        <td>{users.salary}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}