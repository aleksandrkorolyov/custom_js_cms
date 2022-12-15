import { data } from "autoprefixer";
import React from "react";
import UserForm from "../Form/UserForm";
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const navigate = useNavigate();

    async function registerUser(creds) {

        return fetch('http://localhost:4001/user/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
        .then(data => {
            data.json();
            navigate('/cusers');}
            )
    }

    return(
        <div className="usersWrapper">
            <h2>Create new user</h2>
            <UserForm registerHandler={registerUser}/>
        </div>
    )
}

export default Registration