import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

// ! Creamos hooks a partir de los tipos inferidos de store.js para ser usados en toda la aplicacion (la convencion es tener un archivo como este configurado)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();