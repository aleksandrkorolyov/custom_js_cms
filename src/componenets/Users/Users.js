import React, { useEffect, useState } from "react";
import User from "./User/User";

const Users = () => {

    const[users, setUsers] = useState([])

    useEffect(() => {
           fetch('http://localhost:4001/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Referrer-Policy': 'no-referrer'
                },
            }
           )
           .then( async response => {
            const data = await response.json()
            setUsers(data)
           })
    }, []);

    const usersList = users.map((user) => <User value={user}/>)
    return (
        <div className="usersWrapper">
            <h2>Users</h2>
            <table className="btable-auto">
            <thead className="bg-slate-200">
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>E-mail</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>

        </div>
    )
}

export default Users