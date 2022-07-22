import { useSelector, useDispatch } from 'react-redux';

import { ordered, restocked } from './cakeSlice';


const CakeView = () => {
    // ? useSelector: Permite extraer datos del estado de la tienda Redux
    const numOfCakes = useSelector( ( state ) => state.cake.numOfCakes );   // ? state.<key-reducer>.<property-value>

    // ? useDispatch: Devuelve una referencia a la función de despacho de la tienda Redux. Puede usarlo para enviar acciones según sea necesario.
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Number of cakes - { numOfCakes }</h3>
            <button
                onClick={ () => dispatch( ordered() ) }
            >Order cake with ice cream</button>
            <button
                onClick={ () => dispatch( restocked( 5 ) )}
            >Restock 5 cakes</button>
        </div>
    );
};


export default CakeView;
