import { createSlice } from '@reduxjs/toolkit';

import { ordered as cakeOrdered } from '../cake/cakeSlice.js';

// ! initial state ( default values )
const initialState = {
    numOfIceCreams: 20
}

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const icecreamSlice = createSlice({
    name: 'icecream',       // ? La creación de una porción del estado de Redux, requiere un nombre de cadena para identificar el sector
    initialState,           // ? Dicha porción del estado requiere un estado inicial
    // ? Dicha porción del estado requiere definir sus propios Reducers - ( previousState, action ) => newState;
    reducers: {
        ordered: ( state, action ) => {         // ? ordered: Sera el nombre de la accion creada automáticamente, no tendremos que escribirlas a mano.
            if( ! action.payload )
                state.numOfIceCreams--    
            else
                state.numOfIceCreams -= action.payload
        },          
        restocked: ( state, action ) => {       // ? restocked: Sera el nombre de la accion creada automáticamente, no tendremos que escribirlas a mano.
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers: {
        // ! Ahora todos los pasteles se serviran con helado
        // ! Brownie con helado: Al pedido de 'cake/ordered' a agregará un pedido de helado   
        // ? slice-name/accion-name: Reducers - ( previousState, action ) => newState;
        // [ 'cake/ordered' ]: ( state ) => {
        //     state.numOfIceCreams --;
    //     }
    // }
    // * ENFOQUE RECOMENDADO: Usar una funcion de compilacion.
    // ? builder agregará el nuevo caso
    extraReducers: ( builder ) => {
        builder.addCase( cakeOrdered, ( state ) => {        // ? cakeActions.ordered es el action.type & la tipica funcion de un reducer
            state.numOfIceCreams --;
        });    
    }
});


export default icecreamSlice.reducer;                           // ? Exportamos sus reducers
export const { ordered, restocked } = icecreamSlice.actions;    // ? Exportamos sus acciones (ordered, restocked)