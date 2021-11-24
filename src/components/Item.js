import {InfoOutlined} from '@material-ui/icons';
import { CardButton, CardFieldset, CardIcon,CardProductos} from "./styledComponents";
import {Link} from "react-router-dom";


const Item = ({id,titulo, stock, precio, imagenUrl }) => {
    return(
        <>
        { 
        stock >= 1
        ? 
        <>
          <CardProductos>
            <CardFieldset>
              <CardIcon>LMS NAILS</CardIcon>
                <img src={imagenUrl} className="card-img-top"/>
                <div className="card-body" style={{backgroundColor: "#BDECB6"}}>
                    <h4>{titulo}</h4>
                    <h5>${precio}</h5>
                    
                      <Link to={`/item/${id}`}><CardButton>COMPRAR</CardButton></Link>
                    
                </div>
            </CardFieldset>
          </CardProductos>
        </>
        :
        <>
          <CardProductos> 
            <CardFieldset>
            <CardIcon>LMS NAILS</CardIcon>
                <img src={imagenUrl} className="card-img-top"/>
                <div className="card-body" style={{backgroundColor: "#FF8368"}}>
                    <h4 >{titulo}</h4>
                    <h5>${precio}</h5>
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
