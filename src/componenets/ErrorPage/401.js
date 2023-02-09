import React from "react";
import useToken from "../App/useToken";

const Page401 = () => {

    const { token, removeToken, setToken } = useToken();

    removeToken();

    return(
        <>
        <div className="flex items-center justify-center h-screen p-5">
            <h2>Authorization error. Please try to log in one more time</h2>
        </div>
        </>
    );
}

export default Page401;