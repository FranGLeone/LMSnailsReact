import Item from "./Item";
import '../App.css';

const ItemList = ({items}) => {
    return(
        <>
        {
            items.length > 0 
            ? items.map(item => <Item id={item.ItemId} titulo={item.nombre} precio={item.precio} stock={item.cantidad} imagenUrl={item.imagen}/>)
            :<p>Cargando tienda...</p>
        }
        </>
    );
}

export default ItemList;

