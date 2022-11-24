import React from 'react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Logo from './assets/img/sample-logo.webp'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import NavAdmin from './components/NavAdmin'
import Admin from './pages/Admin'

function App() {

  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={<Admin/>}/>
      </Routes>
      
      {/* Login */}
    </div>
  )
}

export default App
