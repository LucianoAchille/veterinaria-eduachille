import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to = '/'>
                        <img src="./logo.jpg" width='70'/>

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link active" aria-current="page" to ='/'>Inicio</Link>
                        <Link className="nav-link" to = '/'>Productos</Link>
                        <Link className="nav-link" to = '/'>Servicios</Link>
                        <Link className="nav-link" to = '/'>Noticias</Link>
                    </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default NavBar;