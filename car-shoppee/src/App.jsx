import React from 'react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Logo from './assets/img/sample-logo.webp'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Cart from './pages/Cart'

function App() {

  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      {/* Login */}
    </div>
  )
}

export default App
