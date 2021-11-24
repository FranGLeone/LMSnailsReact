import { CardProductos } from "./styledComponents";
import {useState} from "react"
import { Link } from 'react-router-dom';
import {ItemContador} from "./Contador";

const ItemDetail = ({ item }) => {
    const [ItemCont, setItemContador] = useState(0);

    const onAdd = (cant) =>{
        alert("Seleccionaste" + cant + "items.")
        setItemContador(cant)
    }

    return (
        <>
      
            <CardProductos>
            
                <img src={item.imagen}  className="card-img-top"/>
                <div className="card-body">
                    <h4>{item.nombre}</h4>
                    <h5 className="">${item.precio}</h5>
                    <h6>Cantidad disponible: {item.cantidad} unid. </h6>
                    <br></br>
                    <h6>Breve descripción del producto:</h6> 
                        <p>{item.descripcion}</p> 

                </div> 
                {
                    ItemContador === 0
                    ? <ItemContador stock={item.stock} initial= {ItemCont} onAdd={onAdd} />
                    :<Link to ="/Cart" style={{textDecoration: "none"}}> <button className="btn btn-success">Finalizar compra</button> </Link>
                }
            
            
            </CardProductos>
      

         
        </>
    );
}

export default ItemDetail;