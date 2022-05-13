import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Layout } from './components/Layout';
import { Notfound } from './pages/Notfound';

import './App.css';

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={(user && <Home />) || (!user && <Navigate to='/login' replace />)} />
              <Route path='signup' element={(!user && <Signup />) || (user && <Navigate to='/login' replace />)} />
              <Route path='login' element={(!user && <Login />) || (user && <Navigate to='/' replace />)} />
              <Route path='*' element={<Notfound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
export default App;
