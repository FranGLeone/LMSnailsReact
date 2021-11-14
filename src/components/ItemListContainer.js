import Contador from "./Contador";

const ItemListContainer = (props) => {
  return(
    <>
    {
      props.ItemListContainer.map((prop, index) =>
      <Contador
        key={index}
        nombre={prop.nombre}
        precio={prop.precio}
        thumbnail={prop.thumbnail}/>)
    }
    </>
  )
}
export default ItemListContainer;

