import { CardButton, CardFieldset, CardProductos } from "./styledComponents";


const Item = ({titulo, stock, precio, imagenUrl }) => {
    return(
        <>
        { 
        stock >= 1
        ? 
        <>
          <CardProductos className="col-lg-4">
            <CardFieldset>
                <img src={imagenUrl} className="card-img-top"/>
                <div className="card-body" style={{backgroundColor: "#BDECB6"}}>
                    <h4>{titulo}</h4>
                    <h5 className="">{precio}</h5>
                    <CardButton>COMPRAR</CardButton>
                </div>
            </CardFieldset>
          </CardProductos>
        </>
        :
        <>
          <CardProductos>
            <CardFieldset>
                <img src={imagenUrl} className="card-img-top"/>
                <div className="card-body" style={{backgroundColor: "#FF8368"}}>
                    <h4 >{titulo}</h4>
                    <h5 className="">{precio}</h5>
                    <CardButton>SIN STOCK</CardButton>
                </div>
            </CardFieldset>
          </CardProductos>
          
        </>
              }
        </>
    )
}

export default Item;
