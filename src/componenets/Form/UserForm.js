import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";


const UserForm = (props) => {

    const formHandler = props.registerHandler    

    function saveUser (event) {
        event.preventDefault()
         const res = formHandler({
            first_name: firstName,
            last_name: lastName,
            role,
            email: email,
            password
    })}

    const isEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    // Async email validation

    function validateEmail (inputValue) {
        setEmail(inputValue);
        if(inputValue === '') {
            setemailValidError('Email is required');
            return;
        }

        if(!isEmail(inputValue)) {
            setemailValidError('Enter correct Email');
            return;
        }

        UserService.getUserbyEmail(inputValue)
        .then( async response => {
            const data = await response.json()
                if(data.length !== 0) {
                    setemailValidError('Email is already used')
                } else {
                    setemailValidError('');
                }
            })
    }

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [emailValidError, setemailValidError] = useState('');

    const user = props.user
    useEffect(() => {
        if(props.user) {
            
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setPassword(user.password);
        setRole(user.role);
        }
    }, [user])
    
        
    
    return (
        <div className="register-wrapper pt-5">
        <form  className="max-w-md">
        <div className="border-2 h-24 bg-slate-100">
            <label >
                <p>First name</p>
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            {!firstName && <span className="text-red-600">First name is required</span>}
        </div>
        <div className="border-2 h-24 bg-slate-100">
            <label>
                <p>Last name</p>
            </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                {!lastName && <span className="text-red-600">Last name is required</span>}
        </div>
        <div className="border-2 h-24 bg-slate-100">
            <label>
                <p>Role</p>
            </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={role} onChange={e => setRole(e.target.value)} />
                {!role && <span className="text-red-600">Role is required</span>}
        </div>
        <div className="border-2 h-24 bg-slate-100">
            <label>
                <p>E-mail</p>
            </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={email} onChange={e => validateEmail(e.target.value)} />
                {emailValidError && <span className="text-red-600">{emailValidError}</span>}
            
        </div>
        <div className="border-2 h-24 bg-slate-100">
            <label>
                <p>Password</p>
            </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                {!password && <span className="text-red-600">Password is required</span>}
        </div>
            <div>
                <button className=" mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit" onClick={saveUser}>
                   Submit
                </button>
            </div>
        </form>
    </div>
    )
}

export default UserForm