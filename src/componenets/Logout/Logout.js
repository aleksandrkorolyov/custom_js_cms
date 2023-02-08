import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (token, removeToken, setToken) => {
    const navigate = useNavigate();

    token.removeToken();

    useEffect(() => {
        navigate('/')
        token.setToken(null)
        }
        , [token.token]);
}

export default Logout