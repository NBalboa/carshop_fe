import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function NavBar() {

    return (
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand text-light fs-2' to='/'>
                    <img src={Logo} alt='Logo' width='100' className="me-3"></img>
                    AYTOK' INHTO
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav gap-2'>
                        <li className='navbar-item rounded'>
                            <Link className='nav-link active text-light fs-5' to='/'>Home</Link>
                        </li>
                        <li className='navbar-item rounded'>
                            <Link className='nav-link active text-light fs-5' to='/products'>Products</Link>
                        </li>
                        <li className='navbar-item rounded'>
                            <Link className='nav-link active text-light fs-5' to='/about'>About Us</Link>
                        </li>
                        <li className='navbar-item rounded'>
                            <Link className='nav-link active text-light fs-5' to='/contact'>Contacts</Link>
                        </li>
                        
                    </ul>
                 
                    <ul className='navbar-nav ms-md-auto gap-2'>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success w-25" type="submit">Search</button>
                        </form>
                        <li className='navbar-item rounded'>
                            <Link className='nav-link active text-white fs-5' to='/login'>Login</Link>
                        </li>
                        <li className='navbar-item rounded'>
                            <Link className='nav-link active text-white fs-5' to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar