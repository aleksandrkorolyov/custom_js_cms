import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UserService from "../../../services/UserService";
import AppLayout from "../../App/AppLayout";
import DataHandler from "../../App/dataHandler";
import UserForm from "../../Form/UserForm";

const Edit = (token) => {

    const [user, setUser] = useState({})
    const [error,setError] = useState();
    const {id} = useParams();

    const navigate = useNavigate()

    const {handle} = DataHandler();

    const jwt = token.token;

    useEffect(() => {
        UserService.getUser(jwt, id)
        .then(async response => {
            const data = await handle(response)
            if(data){
                setUser(data);
            }
        })}, [])

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
        }
    return (
        <AppLayout>
            <div>
                <h2 className="p-3 flex justify-center">Change user data</h2>
                <div className="flex items-center justify-center">
                    <UserForm registerHandler={updateHandler} await user={user}/>
                </div>
            </div>
        </AppLayout>
    )
}

export default Edit