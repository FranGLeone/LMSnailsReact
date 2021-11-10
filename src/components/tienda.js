import { useState } from "react";

const Esmaltes = ({nombre, precio, thumbnail }) => {

  const [items, setItems] = useState(0);

  const incrementar = () => {
      if (items < precio){
        setItems(items+1);

      }
      
    
    
  }
  
  const disminuir = () => {
      if(items > 0){
        setItems(items-1);
          
      }
    
    
  }

        return (
        <>
        {precio >= 1 ?
          <>
                <div class="alert alert-success" role="alert">¡En stock!</div>
                <div className="itemsTienda">
                  <img src={thumbnail} alt={nombre} />
                  <h3>{nombre}</h3>
                  <h5>Cantidad disponible: {precio}</h5>
                  <h4>Agregar al carrito <button className="btn btn-danger" onClick={disminuir}>-</button> <button className="btn btn-primary" onClick={incrementar}>+</button> </h4>
                  <h3>{items}</h3>
                </div>
          </>
        :
        <>
        <div class="alert alert-danger" role="alert">¡Sin stock!</div>
                <div className="itemsTienda">
                  <img src={thumbnail} alt={nombre} />
                  <h3>{nombre}</h3>
                  <h5>Cantidad disponible: {precio}</h5>
                  <h4>Agregar al carrito <button className="btn btn-danger" onClick={disminuir}>-</button> <button className="btn btn-primary" onClick={incrementar}>+</button> </h4>
                  <h3>{items}</h3>
                </div>
        </>

        }
        </>
        );
    }

export default Esmaltes;