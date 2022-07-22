import { useSelector, useDispatch } from 'react-redux';   
import { useEffect, useRef, useState } from 'react';

import { fetchUsers } from './userSlice';
import { fetchUserById } from './userByIdSlice';


const UserView = () => {
    const [ userId, setUserId ] = useState( 1 ); 

    // ! Define un objeto mutable (Para controlar la doble ejecucion del efecto cuando React esta en modo Estricto)
    const isEffectRun = useRef( false );

    // ? useSelector: Permite extraer datos del estado de la tienda Redux
    const dataUsers = useSelector( state => state.user );       // ? state.<key-reducer> por que es un proceso asincrono
    const dataUserId = useSelector( state => state.userById );  // ? state.<key-reducer> por que es un proceso asincrono

    // ? useDispatch: Devuelve una referencia a la función de despacho de la tienda Redux. Puede usarlo para enviar acciones según sea necesario.
    const dispatch = useDispatch();

    useEffect(() => {
        // ! Verifica que el efecto no se ha lanzado
        if( ! isEffectRun.current )
            dispatch( fetchUsers() );

        return () => {
            console.log( 'Unmount hook useFetch!' );
            isEffectRun.current = true;     // ! Cambia el estado del inmutable que controla consulta del API una sola ves ante la duplicidad de la ejecucion del hoook useEffect sobre el Hook u Componente
        }
    }, [] );
    
    console.log( dataUserId.user );

    return (
        <div className="async-app">
            <h2>Procesos asíncronos</h2>
            <div className="users">
                <div>
                    <h3>User by id</h3>
                    <label htmlFor="user-id" className="lb-user-id">Enter user ID</label>
                    <input
                        id="user-id"
                        type="number"
                        value={ userId }
                        onChange={ event => setUserId( parseInt( event.target.value ) ) }
                        min="1"
                        max="10"
                    />
                    <button
                        onClick={ event => dispatch( fetchUserById( userId ) )}
                    >get user with id { userId }</button>
                    {   dataUserId.loading && <p>Loading...</p> }
                    {   ! dataUserId.loading && dataUserId.error
                            ?   <p>{ dataUserId.error }</p>
                            :   null
                    }
                    {   ! dataUserId.loading && dataUserId.user
                            ?   <p className="the-user-list">
                                {   dataUserId.user.name } - {    dataUserId.user.email}
                                </p>
                            :   null
                    }
                </div>
                <div>
                    <h3>List of users</h3>
                    {   dataUsers.loading && <p>Loading...</p> }
                    {   ! dataUsers.loading && dataUsers.error 
                            ?   <p>{ dataUsers.error }</p>
                            :   null
                    }
                    {   ! dataUsers.loading && dataUsers.users.length 
                            ?   <ul className="user-list">
                                    {   dataUsers.users.map( user => (
                                            <li key={ user.id }>{ user.name }</li>
                                        ))
                                    }
                                </ul>
                            :   null
                    }
                </div>
            </div>
        </div>
    );
};


export default UserView;
