import { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import type { Product } from "./Types/Product";

const App = () => {


  const BASE_URL = "https://dummyjson.com/products";
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const AbortControllerRef = useRef<AbortController | null>(null);





  useEffect(() => {
    const fetchProducts = async () => {
      // cancel any old request that is still working
      AbortControllerRef.current?.abort();
      // create new abort controller
      AbortControllerRef.current = new AbortController();

      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}`, {
          signal: AbortControllerRef.current?.signal, // link abort controller with fetch
        });
        if (!res.ok) throw new Error("Failed To Fetch Data");
        const data = await res.json();
        setProducts(data.products as Product[]);
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          console.log("Fetch aborted");
        }else{
          setError((err as Error).message)
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    // clean up function
    return () => AbortControllerRef.current?.abort();
  }, []);

  if (error) {
    return <div className="text-red-400 font-bold ">Error: {error}</div>;
  }

  return (
    <div className=" w-full md:w-[80%]  h-screen mx-auto p-3 ">
      <Header />
      {loading && <h1>isLoading...</h1>}
      {
        !loading && <Products items={products} />
      }
    </div>
  );
};

export default App;
