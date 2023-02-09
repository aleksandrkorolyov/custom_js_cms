import { data } from "autoprefixer";
import React from "react";
import UserForm from "../Form/UserForm";
import { useNavigate } from 'react-router-dom';
import UserService from "../../services/UserService";
import DataHandler from "../App/dataHandler";

const Registration = (token) => {

    const jwt = token.token;
    const navigate = useNavigate();
    const {handle} = DataHandler();

    async function registerUser(creds) {
        return UserService.createUser(creds)
            .then(data => {
            data.json();
            navigate('/cusers');}
            )
    }

    UserService.getUserRole(jwt)
    .then(async response => { 
        const data = await handle(response);
    })

    return(
        <div>
            <div className="flex justify-center pt-5">Create new user</div>
            <div className="flex items-center justify-center h-screen usersWrapper">
                <UserForm registerHandler={registerUser} token={jwt}/>
            </div>
        </div>
    )
}

export default Registration