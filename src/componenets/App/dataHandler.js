import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DataHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [apiData, setApiData] = React.useState();
    const handle = async (response) => {
        const code = response.status
        if (code > 400) {
            navigate('/error', {
                state: code
            })
        } else {
            const data = response.json();
            return data;
        }
    }

    return { handle }
}

export default DataHandler;