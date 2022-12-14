import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoginAdmin from './pages/LoginAdmin'
import ProductDetails from './pages/ProductDetails'
import Profile from './pages/Profile'
import AddProduct from './components/AddProduct'
import ProductList from './pages/ProductList'
import EditProduct from './pages/EditProduct'
import NotFound from './pages/NotFound'



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
              <Route path='/checkout' element={<CheckOut/>}/>
              <Route path='/login/admin' element={<LoginAdmin/>}/>
              <Route path='/productdetails/:id' element={<ProductDetails/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/addproduct' element={<AddProduct/>}/>
              <Route path='/productlist' element={<ProductList/>}/>
              <Route path='/editproduct/:id' element={<EditProduct/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
          <ToastContainer/>
      
    </div>
  )
}

export default App
