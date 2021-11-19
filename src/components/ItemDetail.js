

const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item.thumbnail
            ? 
            <div>
                  <img src={item.thumbnail}/>
                  <h3>{item.nombre}</h3>
                  <h4>{item.precio}</h4>
                  
                  <h5>Cantidad disponible: {item.cantidad} Unid.</h5>
                  
                </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;