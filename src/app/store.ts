import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import cakeReducer from'../features/cake/cakeSlice.js';
import icecreamReducer from'../features/icecream/icecreamSlice.js';
import userReducer from'../features/user/userSlice.js';
import userByIdReducer from'../features/user/userByIdSlice.js';


// ! Redux store
// ? Responsabilidad #1: Mantiene el estado de la aplicacion
const store = configureStore({
    // ! Combine Reducers
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
        userById: userByIdReducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( logger )
});


export default store;