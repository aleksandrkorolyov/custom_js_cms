import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './componenets/Users/Users';
import './App.css';
import Registration from './componenets/Registration/Registratoin';
import Edit from './componenets/Users/EditUser/EditUser';
import { Navigation } from './componenets/Navigation/Navigation';
import Login from './componenets/Login/Login';
import useToken from './componenets/App/useToken';
import Home from './componenets/Home/Home';
import Logout from './componenets/Logout/Logout';

function App() {

  const {token, removeToken, setToken} = useToken();

   return (
    <div className="pt-5 p-10">
      <meta name="referrer" content="no-referrer" />
      <BrowserRouter>
      <Navigation value={token}/>
        <Routes>
          {!token && 
            <Route path='/clogin' element={<Login setToken={setToken} />} />
          }
          <Route path='/' element={<Home/>}/>
          <Route path='/cusers' element={<Users/>}/>
          <Route path='/cregistration' element={<Registration/>}/>
          <Route path='/cuser/:id/edit' element={<Edit/>}/>
          {/* {token !== null && */}
          <Route path='/logout' element={<Logout token={token} removeToken={removeToken} setToken={setToken}/>}/>
          {/* } */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
