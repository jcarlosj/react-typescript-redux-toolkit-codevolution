import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// ! initial state ( default values )
const initialState = {
    loading: false,
    user: {},
    error: ''
}

// ! Define async action creator: an action creator returns an action (Invocamos la creacion de un proceso asincrono)
export const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async ( user_id ) => {

        const response = await axios.get( `https://jsonplaceholder.typicode.com/users/${ user_id }` );
        // console.log( '>>', response.data );

        return response.data;
    }
);

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const userByIDSlices = createSlice({
    'name': 'userbyid',
    initialState,
    extraReducers: ( builder ) => {
        builder.addCase( fetchUserById.pending, state => {
            state.loading = true;
        });
        builder.addCase( fetchUserById.fulfilled, ( state, action ) => {
            state.loading = false;
            state.user = action.payload;
            state.error = '';
        });
        builder.addCase( fetchUserById.rejected, ( state, action ) => {
            state.loading = false;
            state.user = {};
            state.error = action.error.message;
        });
    }
});


export default userByIDSlices.reducer;         // ? Exportamos sus reducers