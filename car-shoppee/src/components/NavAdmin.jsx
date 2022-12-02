import React from 'react'
import { Link } from 'react-router-dom'

function NavAdmin() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to='/admin'>Admin</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to='/admin'>Dashboard</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Transactions</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Orders</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Add Products</a></li>
                        <li><a class="dropdown-item" href="#">Product List</a></li>
                        <li><a class="dropdown-item" href="#">Categories</a></li>
                        <li><a class="dropdown-item" href="#">Brands</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavAdmin