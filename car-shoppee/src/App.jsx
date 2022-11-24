import React from 'react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Logo from './assets/img/sample-logo.webp'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='/products' element={<Products/>}/>
        </Routes>
      {/* Login */}
    </div>
  )
}

export default App
