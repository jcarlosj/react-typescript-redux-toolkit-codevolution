import { createSlice } from '@reduxjs/toolkit';

// ! initial state ( default values )
const initialState = {
    numOfCakes: 10
}

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const cakeSlice = createSlice({ 
    name: 'cake',       // ? La creación de una porción del estado de Redux, requiere un nombre de cadena para identificar el sector
    initialState,       // ? Dicha porción del estado requiere un estado inicial
    // ? Dicha porción del estado requiere definir sus propios Reducers - ( previousState, action ) => newState;
    reducers: { 
        // key-action: function
        ordered: ( state ) => {                 // ? ordered: Sera el nombre de la accion creada automáticamente, no tendremos que escribirlas a mano.
            state.numOfCakes--
        },
        restocked: ( state, action ) => {       // ? restocked: Sera el nombre de la accion creada automáticamente, no tendremos que escribirlas a mano.
            state.numOfCakes += action.payload
        }
    }
});


export default cakeSlice.reducer;                           // ? Exportamos sus reducers
export const { ordered, restocked } = cakeSlice.actions;    // ? Exportamos sus acciones (ordered, restocked)