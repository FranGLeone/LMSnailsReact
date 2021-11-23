
import { Link } from "react-router-dom";
import { MenuItem, Center, WrapperTonos} from './styledComponents';

const NavBarTienda = () => {
    return (
            <WrapperTonos>
                <Center>
                    <Link to='/categoria/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Tonos oscuros</MenuItem></Link>
                    <Link to='/categoria/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Tonos claros</MenuItem></Link>                   
                </Center>
            </WrapperTonos>
    );
}

export default NavBarTienda;

