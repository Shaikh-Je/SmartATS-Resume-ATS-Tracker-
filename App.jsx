import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function App(){
  return (
    <BrowserRouter>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">Jobs</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Jobs/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
