import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
// import { PropTypes } from "prop-types";

import "./Login.css";

async function loginUser(creds) {

    return UserService.loginUser(creds)
    .then(data => data.json())
}

const Login = ({setToken}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = await loginUser({
            email,
            password
        });
        setToken(user.token);
        navigate('/');
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form  className="p-5 border-2" onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div className="mt-3">
                    <button className=" p-1 border-2" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default Login

// Login.ReactPropTypes = {
//     setToken: PropTypes.func.isRequred
// }