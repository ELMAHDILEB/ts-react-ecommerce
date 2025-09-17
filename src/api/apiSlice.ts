import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../Types/Product";



export const  apiSlice  = createApi({
    reducerPath:  "api", // name slice on store
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder)=>({
     getProducts: builder.query<{
        products: Product[]; total: number}, // resposne type
        {page?:number; limit?:number} // argument type
        >({ 
        query: ({page = 1, limit = 20} = {} )=> `/products?limit=${limit}&skip=${(page - 1) * limit}`,
     })
    })
})

export const { useGetProductsQuery } = apiSlice;