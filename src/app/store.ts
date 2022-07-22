import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';
import userByIdReducer from '../features/user/userByIdSlice';


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

// ! Vamos a exportar dos tipos inferidos de store.js
export type RootState = ReturnType<typeof store.getState>       // ? Root State
export type AppDispatch = typeof store.dispatch;                // ? App Dispatch