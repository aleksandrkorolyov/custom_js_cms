import React from "react";
import { useLocation } from "react-router-dom";
import { get } from "loadsh";
import Page404 from "../ErrorPage/Page404";
import Page400 from "../ErrorPage/400";
import Page401 from "../ErrorPage/401";
import Page500 from "../ErrorPage/500";

const ErrorHandler = () => {
    const location = useLocation();

    switch (location.state) {
        case 401:
          return <Page401 />;

        case 400:
          return <Page400 />;

        case 404:
          return <Page404 />;
          
        default:
          return <Page500 />
      }
};

export default ErrorHandler;