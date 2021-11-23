import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget.js';
import { Right, Left} from './styledComponents';

function NavBar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}>
                        <img src="/Images/LMS.png" style={{width:"150px", height:"150px"}}></img>
                    </Link>
                    </Left>
                    
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Tienda</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Galería</a>
                        </li>
                    </ul>
                    </div>
                    
                </div>
            </nav>
            <Right>
                <CartWidget />
            </Right>
        </>
    )
}

export default NavBar;
