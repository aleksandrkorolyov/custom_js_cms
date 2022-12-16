import { data } from "autoprefixer";
import React from "react";

const User = (user) => {

    const deleteUser = (userId) => {
        console.log(user.value._id);
        fetch(`http://localhost:4001/user/${user.value._id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
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
            <td className="p-2">
                <a href = {`/user/${user.value._id}/edit`}>Edit</a>
            </td>
            <td className="p-2">
                <a href='#' onClick={deleteUser}>Delete</a>
            </td>
        </tr>
        </>
    )

}

export default User