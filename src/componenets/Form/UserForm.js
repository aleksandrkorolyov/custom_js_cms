import React, { useEffect, useState } from "react";
import { Navigate, useHistory } from "react-router-dom";


const UserForm = (props) => {

    const formHandler = props.registerHandler    

    function saveUser (event) {
        event.preventDefault()
         const res = formHandler({
            first_name: firstName,
            last_name: lastName,
            role,
            email: username,
            password
    })}

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [error, setError] = useState(null);

    const user = props.user
    useEffect(() => {
        if(props.user) {
            
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setUserName(user.email);
        setPassword(user.password);
        setRole(user.role);
        }
    }, [user])
    
        
    
    return (
        <div className="register-wrapper">
        <form  className="max-w-md">
            <label >
                <p>First name</p>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                {!firstName && <span className="warn-notice">First name is required</span>}
           
            <label>
                <p>Last name</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                {!lastName && <span className="warn-notice">Last name is required</span>}
            </label>
            
            <label>
                <p>Role</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={role} onChange={e => setRole(e.target.value)} />
                {!role && <span className="warn-notice">Role is required</span>}
            </label>

            <label>
                <p>Username (Email)</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={username} onChange={e => setUserName(e.target.value)} />
                {!username && <span className="warn-notice">Email is required</span>}
            </label>
            <label>
                <p>Password</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                {!password && <span className="warn-notice">Password is required</span>}
            </label>
            <div>
                <button className=" mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit" onClick={saveUser} 
        >Submit</button>
            </div>
            {error &&  <p style={{color: 'red'}}>{error}</p>}
        </form>
    </div>
    )
}

export default UserForm