import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (token, removeToken) => {
    const navigate = useNavigate();
console.log(token.token)
    token.removeToken();

    useEffect(() => navigate('/'), [token.token])
    // navigate('/');
    
}

export default Logout