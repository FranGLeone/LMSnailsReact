import Item from "./Item";
import '../App.css';

const ItemList = ({items}) => {
    return(
        <>
        {
            items.length > 0 
            ? items.map(item => <Item key={item.id} titulo={item.nombre} precio={item.precio} stock={item.cantidad} imagenUrl={item.thumbnail}/>)
            :<p>Cargando tienda...</p>
        }
        </>
    );
}

export default ItemList;

