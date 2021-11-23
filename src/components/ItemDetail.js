import { CardProductos } from "./styledComponents";
import {useState} from "react"



const ItemDetail = ({ item }) => {

    return (
        <>
       {
           item && item.image
            ?
            <CardProductos>
            
                <img src={item.imagen} className="card-img-top"/>
                <div className="card-body">
                    <h4>{item.nombre}</h4>
                    <h5 className="">${item.precio}</h5>
                    <h6>Cantidad disponible: {item.cantidad} unid. </h6>
                    <br></br>
                    <h6>Breve descripción del producto:</h6> 
                        <p>{item.descripcion}</p>

                </div>
            
            
            </CardProductos>
         : <h4>Cargando Item...</h4>
        }

         
        </>
    );
}

export default ItemDetail;