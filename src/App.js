import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './componenets/Users/Users';
import './App.css';
import Registration from './componenets/Registration/Registratoin';
import Edit from './componenets/Users/EditUser/EditUser';
import { Navigation } from './componenets/Navigation/Navigation';

function App() {
  return (
    <div className="pt-5 p-10">
      <meta name="referrer" content="no-referrer" />
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/cusers' element={<Users/>}/>
          <Route path='/cregistration' element={<Registration/>}/>
          <Route path='/cuser/:id/edit' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
