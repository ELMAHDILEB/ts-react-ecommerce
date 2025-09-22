import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/apiSlice";
import filtersReducer  from "../features/filters/filtersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartrReducer } from "../features/cart/CartSlice";


export const store = configureStore({
     reducer: {
      cart:  cartrReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
        filters: filtersReducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
     
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState> // return type of state on store
export type AppDispatch = typeof store.dispatch; // get dispatch inside store