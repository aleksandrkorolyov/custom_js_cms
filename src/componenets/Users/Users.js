import React, { useEffect, useState } from "react";

const Users = () => {

    const[users, setUsers] = useState([])

    useEffect(() => {
           fetch('http://localhost:4001/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
           )
           .then(response => {
            setUsers(response.data)
           })
    }, []);

    console.log(users)
    return(
        <div className="usersWrapper">
            <h2>Users</h2>

        </div>
    )
}

export default Users