import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";


export const store = configureStore({
     reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
     
});

export type RootState = ReturnType<typeof store.getState> // return type of state on store
export type AppDispatch = typeof store.dispatch; // get dispatch inside store