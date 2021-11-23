import {InfoOutlined} from '@material-ui/icons';
import { CardButton, CardFieldset, CardIcon, Icon, CardProductos, Info } from "./styledComponents";
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
                    <CardButton>COMPRAR</CardButton>
                    <Info>
                      <Icon style={{cursor: "pointer"}}>
                        <Link to={`/item/${id}`}><InfoOutlined />Detalles</Link>
                      </Icon>
                    </Info>
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
                    <Info>
                      <Icon style={{cursor: "pointer"}}>
                        <Link to={`/item/${id}`}><InfoOutlined />Detalles</Link>
                      </Icon>
                    </Info>
                </div>
            </CardFieldset>
          </CardProductos>
          
        </>
              }
        </>
    )
}

export default Item;
