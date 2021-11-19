import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
  DivProductos,
} from "./styledComponents";

const Item = ({titulo, stock, precio, imagenUrl }) => {
    return(
        <>
        { 
        stock >= 1
        ? 
        <>
            <CardWrapper>
              <CardHeader>
                <CardHeading>{titulo}</CardHeading>
              </CardHeader>
              <CardBody>
                <CardFieldset>
                <img src={imagenUrl} alt={titulo} />
                </CardFieldset>
                <CardFieldset>
                  
                </CardFieldset>
                <CardFieldset>
                  <CardButton type="button">Detalles</CardButton>
                </CardFieldset>
              </CardBody>
            </CardWrapper>
        </>
        :
        <>
            
        </>
              }
        </>
    )
}

export default Item;
