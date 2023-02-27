import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useIdle } from "react-use";
import useToken from "./useToken";

const ProtectedRoute = () => {

    const { token, removeToken, setToken } = useToken();

    const navigate = useNavigate();

    //Set idle timeout for 5 minutes
    const isIdle = useIdle(300000);

    useEffect(() => {
        if (isIdle === true) {
            removeToken();
            navigate(0)
        }
    }, [isIdle]);

    return token ? <Outlet /> : <Navigate to={'/login'} replace />;
}

export default ProtectedRoute;