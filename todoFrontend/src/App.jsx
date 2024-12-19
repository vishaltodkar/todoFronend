import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'


import UsersList from './pages/UsersList'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashbord' element={<Dashboard />} />
        <Route path='/users' element={<UsersList />} />


      </Routes>
    </Router>
  )
}

export default App
