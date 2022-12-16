import React from "react";
import { useLocation } from "react-router-dom";
import UserForm from "../../Form/UserForm";

const Edit = () => {

    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id")

    console.log(id);

    return (
        <>

        </>
    )
}

export default Edit