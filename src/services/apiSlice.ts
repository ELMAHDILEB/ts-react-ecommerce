import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../Types/Product";
interface ProductsResponse {
    products: Product[];
    total: number;
  }
 

  // interface CartResponse{
  //   id:string;
  //   products: {id:number, quantity: number}[];
  //   total:number;
  //   discountTotal:number;
  //   userID:number;
  // }


export const  apiSlice  = createApi({
    reducerPath:  "api", // name slice on store
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder)=>({
     getProducts: builder.query<ProductsResponse, 
        {page?:number; limit?:number} // argument type
        >({ 
        query: ({page = 1, limit = 10})=> `/products?limit=${limit}&skip=${(page - 1) * limit}`,
     }),

    //  addToCart: builder.mutation<
    //  CartResponse, 
    //  {userID: number, products: {id: number, quantity: number}[]}
    //  >({
    //          query: (body)=>({
    //                 url: `/carts/add`,
    //                 method: "POST",
    //                 body,
    //          })
    //  })   
    }),
})

export const { useGetProductsQuery } = apiSlice;

