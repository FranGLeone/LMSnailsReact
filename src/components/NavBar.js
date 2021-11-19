import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.js';

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <CartWidget/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Galería</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
