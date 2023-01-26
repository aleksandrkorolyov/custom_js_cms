import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UserService from "../../../services/UserService";
import UserForm from "../../Form/UserForm";

const Edit = (token) => {

    const [user, setUser] = useState({})
    const [error,setError] = useState();
    const {id} = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        UserService.getUser(id)
        .then(res => {
         if(!res.ok) {
            throw Error("Can't connect to server")
         }
         return res;
        })
        .then(async data => {
        setUser(await data.json());
        })
        .catch((err) => {
            setError(err);
        });
    }, [])

        const jwt = token.token;

        async function updateHandler(creds) {

            return UserService.changeUser(id, creds, jwt)
            .then(data => {
                data.json();
                navigate('/cusers');}
                )
        }

        if(error) {
            return(
                <div role="alert">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Error
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>{error.message}</p>
                </div>
              </div>
            )
            // <div className="">{error.message}</div>)
        }
    return (
        <>
            <h2 className="pb-3">Change user's data</h2>
            <UserForm registerHandler={updateHandler} await user={user}/>
        </>
    )
}

export default Edit