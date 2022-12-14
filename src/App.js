import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './componenets/Users/Users';
import './App.css';
import Registration from './componenets/Registration/Registratoin';

function App() {
  return (
    <div className="wrapper">
      <h2>Custom CMS</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/cusers' element={<Users/>}/>
          <Route path='/cregistration' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
