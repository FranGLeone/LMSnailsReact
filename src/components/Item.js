

const Item = ({titulo, stock, precio, imagenUrl }) => {
    return(
        <>
                <div>
                  <img src={imagenUrl}/>
                  <h3>{titulo}</h3>
                  <h4>{precio}</h4>
                  <hr> </hr>
                  <h5>Cantidad disponible: {stock} Unid.</h5>
                  
                </div>
        </>
    )
}

export default Item;
