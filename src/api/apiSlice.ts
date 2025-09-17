import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../Types/Product";

export const  apiSlice  = createApi({
    reducerPath:  "api", // name slice on store
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder)=>({
     getProducts: builder.query<Product[], void>({
        query: ()=> "/products",
        transformResponse: (response: { products: Product[]}) => response.products,
     })
    })
})

export const { useGetProductsQuery } = apiSlice;