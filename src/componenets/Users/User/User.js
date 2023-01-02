import { data } from "autoprefixer";
import React from "react";
import UserService from "../../../services/UserService";

const User = (user) => {

    const deleteUser = (userId) => {
        UserService.deleteUser(user.value._id)
        .then(() => {
            window.location.reload();
        })
    }

    return (
        <>
        <tr key={user.value._id}>
            <td>
                {user.value.first_name}
            </td>
            <td className="p-2">
                {user.value.last_name}
            </td>
            <td className="p-2">
                {user.value.email}
            </td>
            <td className="p-2">
                {user.value.role}
            </td>
            <td className="p-2 editButton">
                <a href = {`/cuser/${user.value._id}/edit`}>Edit</a>
            </td>
            <td className="p-2 deleteButton">
                <a href='#' onClick={deleteUser}>Delete</a>
            </td>
        </tr>
        </>
    )

}

export default User