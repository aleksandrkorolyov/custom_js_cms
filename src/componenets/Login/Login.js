import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import DataHandler from "../App/dataHandler";

import "./Login.css";

 async function loginUser(creds) {
    return await UserService.loginUser(creds)
    .then(response => response)
}

const Login = ({setToken}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {handle} = DataHandler();
    const navigate = useNavigate();


    
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            email,
            password
        });

        const data = await handle(response)
        if(data) {
            setToken(data.token);
            navigate('/');
        }
    }

    return(
        <div className="flex items-center justify-center login-wrapper pt-10">
            <h1>Please Log In</h1>
            <form  className="p-5 border-2" >
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div className="mt-3">
                    <button onClick={handleSubmit} className=" p-1 border-2" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login