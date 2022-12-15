import React from "react";

const User = (user) => {
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
                Edit
            </td>
            <td className="p-2">
                Delete
            </td>
        </tr>
        </>
    )

}

export default User