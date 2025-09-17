import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import filtersReducer  from "../features/filters/filtersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
     reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        filters: filtersReducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
     
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState> // return type of state on store
export type AppDispatch = typeof store.dispatch; // get dispatch inside store