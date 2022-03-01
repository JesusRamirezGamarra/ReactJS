import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (



    // <div>Navbar</div>

    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="./TuWebCO.png" height="42" alt="Tu Web CO" /> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
            <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <Link className="nav-link" to='/' >Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/hombres">Hombres</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/mujeres">Mujeres</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/boys">Niños</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/girls">Niñas</Link>
            </li> 

            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"></hr> </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li> */}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/items">Items</Link>
            </li> */}
            </ul>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
        </nav>

    </div>


  )
}

export default Navbar