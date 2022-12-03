import React from 'react'
import { Link } from 'react-router-dom'

function NavAdmin() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/admin'>Admin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/admin'>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Transactions</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Orders</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Add Products</a></li>
                        <li><a className="dropdown-item" href="#">Product List</a></li>
                        <li><a className="dropdown-item" href="#">Categories</a></li>
                        <li><a className="dropdown-item" href="#">Brands</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavAdmin