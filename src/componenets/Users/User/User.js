import React from "react";
import UserService from "../../../services/UserService";

const User = (user) => {

    const jwt = user.token;

    const isAdmin = user.isAdmin;

    const deleteUser = () => {
        UserService.deleteUser(user.value._id, jwt)
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
            {isAdmin && 
            <td className="p-2 editButton">
                <a href = {`/cuser/${user.value._id}/edit`}>Edit</a>
            </td>
            }

            {isAdmin && 
            <td className="p-2 deleteButton">
                <a href='#' onClick={deleteUser}>Delete</a>
            </td>
            }
            {!isAdmin &&
                <td className="p-2"><a>Admin only can edit and delete users</a></td>
            }
            
        </tr>
        </>
    )

}

export default User