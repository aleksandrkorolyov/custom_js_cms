import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Users from './componenets/Users/Users';
import './App.css';
import Registration from './componenets/Registration/Registratoin';
import Edit from './componenets/Users/EditUser/EditUser';
import { Navigation } from './componenets/Navigation/Navigation';
import Login from './componenets/Login/Login';
import useToken from './componenets/App/useToken';
import Home from './componenets/Home/Home';
import Logout from './componenets/Logout/Logout';
import Page404 from './componenets/ErrorPage/Page404';
import ErrorHandler from './componenets/ErrorHandler/ErrorHandler';
import ProtectedRoute from './componenets/App/ProtectedRoute';

function App() {

  const { token, removeToken, setToken } = useToken();

  return (
    <div className="pt-5 p-10">
      <meta name="referrer" content="no-referrer" />
      <BrowserRouter>
        <Navigation value={token} />
        <Routes>
          {!token &&
          <Route path='/login' element={<Login setToken={setToken} />} />
          }
          <Route path={'/error'} element={<ErrorHandler />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/cusers' element={<Users token={token} />} />
            <Route path='/cregistration' element={<Registration token={token} />} />
            <Route path='/cuser/:id/edit' element={<Edit token={token} />} />
            <Route path='/logout' element={<Logout token={token} removeToken={removeToken} setToken={setToken} />} />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
