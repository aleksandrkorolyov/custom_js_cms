import { useState } from "react";

export default function useToken() {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const [token, setToken] = useState(getToken())
    
    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    }

    const removeToken = () => {
        localStorage.removeItem("token");
    }

    return {
        setToken: saveToken,
        removeToken,
        token
    }
}