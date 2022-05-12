import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Layout } from './components/Layout';
import { Notfound } from './pages/Notfound';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
