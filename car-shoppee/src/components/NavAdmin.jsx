import React from 'react'
import { Link } from 'react-router-dom'

function NavAdmin() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
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
                    <a className="nav-link active" href="#">Transactions</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Orders</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul className="dropdown-menu">
                        <Link to='/addproduct'><a className="dropdown-item" href="#">Add Products</a></Link>
                        <Link to='/productlist'><a className="dropdown-item" href="#">Product List</a></Link>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavAdmin