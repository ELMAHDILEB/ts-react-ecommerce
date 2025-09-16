// import { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
// import type { Product } from "./Types/Product";
import { useGetProductsQuery } from "./features/api/apiSlice";

const App = () => {

  const { data: products=[], error, isLoading} = useGetProductsQuery();

  

  if(isLoading) return <h1>isLoading...</h1>;
  if(error) return <div className="text-red-500">Error loading products</div>;

  return (
    <div className=" w-full md:w-[80%]  h-screen mx-auto p-3 ">
      <Header />
        <Products items={products} />
    </div>
  );
};

export default App;
