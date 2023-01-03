import { data } from "autoprefixer";
import React from "react";
import UserForm from "../Form/UserForm";
import { useNavigate } from 'react-router-dom';
import UserService from "../../services/UserService";

const Registration = () => {

    const navigate = useNavigate();

    async function registerUser(creds) {
        return UserService.createUser(creds)
            .then(data => {
            data.json();
            navigate('/cusers');}
            )
    }

    return(
        <div className="usersWrapper pt-5">
            <h1>Create new user</h1>
            <UserForm registerHandler={registerUser}/>
        </div>
    )
}

export default Registration