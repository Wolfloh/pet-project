import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { rootReducer } from '../store/index';

export type rootReducerType = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector