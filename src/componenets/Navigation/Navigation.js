import React from "react";
import { Link } from "react-router-dom";

export function Navigation(token) {
    
    const userToken = token.value;

    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white shadow-md">
            <h3 className="font-bold ">Custom CMS</h3>
            <span>
                {userToken === null &&
                    <Link className="mr-2 p-4 hover:bg-orange-600" to="/login">Login</Link>
                }
                <Link className="mr-2 p-4 hover:bg-orange-600" to="/">Home</Link>
                <Link className="mr-2 p-4 hover:bg-orange-600" to="/cusers">Users</Link>
                <Link className="mr-2 p-4 hover:bg-orange-600" to="/cregistration">Registration</Link>
                {userToken !== null &&
                    <Link className="mr-2 p-4 hover:bg-orange-600" to="/logout">Logout</Link>
                }
            </span>
        </nav>
    )
}