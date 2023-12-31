import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
          .concat(albumsApi.middleware);
    }
})

setupListeners(store.dispatch)

export * from './thunks/fetchUsers';
export * from './thunks/addUser'
export * from './thunks/removeUser'
export { useFetchAlbumsQuery } from './apis/albumsApi'
