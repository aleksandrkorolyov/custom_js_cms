import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UserService from "../../../services/UserService";
import UserForm from "../../Form/UserForm";

const Edit = () => {

    const [user, setUser] = useState({})
    const {id} = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        UserService.getUser(id)
        .then(async data => {
        setUser(await data.json());
        })}, [])

        async function updateHandler(creds) {

            // return fetch(`http://localhost:4001/user/${id}/edit`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(creds)
            // })

            return UserService.changeUser(id, creds)
            .then(data => {
                data.json();
                navigate('/cusers');}
                )
        }
    return (
        <>
            <h2 className="pb-3">Change user's data</h2>
            <UserForm registerHandler={updateHandler} await user={user}/>
        </>
    )
}

export default Edit