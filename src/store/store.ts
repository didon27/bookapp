import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import booksReducer from './books/booksSlice';

const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
