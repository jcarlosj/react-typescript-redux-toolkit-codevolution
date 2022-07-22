import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


// ! Define Type in TypeScript
type User = {
    id: number;
    name: string;
    email: string;
}

// ! Define Type in TypeScript
type InitialState = {
    loading: boolean,
    users: User[],
    error: string,
}

// ! initial state ( default values )
const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

// ! Define async action creator: an action creator returns an action (Invocamos la creacion de un proceso asincrono)
// ? fetchUsers: El proceso asincrono generará tipos de acciones pendientes, cumplidas y rechazadas
export const fetchUsers = createAsyncThunk( 
        'user/fetchUsers',          // ? 'nombre de la accion' (action type)
        async () => {               // ? funcion callback que crea el payload
            const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' );

            return response.data.map( user => ({
                id: user.id,
                name: user.name,
                email: user.email
            }));
            // ! NOTA: No requerimos el catch ya que el error es manejado         
        }
);

// ! Create a Redux State Slice (Crear una porción de estado Redux):
// ! createSlice: Generará automáticamente creadores de acciones con los mismos nombres que las funciones reductoras que hemos escrito.
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder.addCase( fetchUsers.pending, state => {
            state.loading = true;
        });
        builder.addCase( fetchUsers.fulfilled, ( state, action: PayloadAction<User[]> ) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase( fetchUsers.rejected, ( state, action ) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message || 'Something went wrong!';
        });
    }
});


export default userSlice.reducer;         // ? Exportamos sus reducers