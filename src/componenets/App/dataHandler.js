import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppVersionHandler from "./../Modal/AppVersionHandler";

const DataHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [apiData, setApiData] = React.useState();
    const handle = async (response) => {
        const code = response?.status
        if (code < 400) {
            const data = response.json();
            const appVersion = response.headers.get('X-Version');
            const { handleAppVersion } = AppVersionHandler();
            handleAppVersion(appVersion);
            return data;
        } else {
            navigate('/error', {
                state: code
            })
        }
    }

    return { handle }
}

export default DataHandler;