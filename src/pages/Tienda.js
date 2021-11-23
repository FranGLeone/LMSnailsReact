import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from '../components/itemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';
import NavBarTienda from '../components/NavBarTienda';


const Tienda =() =>{
    return(
        <BrowserRouter>
            <header>
            <NavBar />
            </header>
            <NavBarTienda />
            <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/categoria/:CategoriaId' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Tienda;