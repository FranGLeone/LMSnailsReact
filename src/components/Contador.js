import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './styledComponents'; 

 export const ItemContador = ({ stock = 0, inicial = 1  ,onAdd }) => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador(inicial);
    },[]);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    
    const disminuir = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }
return(
    <ProductAmountContainer>
            <button className="btn btn-primary" onClick={incrementar}>+</button>
            <ProductAmount>{contador}</ProductAmount>
            <button className="btn btn-danger" onClick={disminuir}>-</button>
            {
                stock && contador
                ? <button className="btn btn-info" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
                : 
                <button clasName="bt btn-info" disabled>Agregar al Carrito</button>
            }
            
        </ProductAmountContainer>
);
}

;