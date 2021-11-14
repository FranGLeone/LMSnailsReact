import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.js';

function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <CartWidget/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Servicios</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Tienda</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link">Galería</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
