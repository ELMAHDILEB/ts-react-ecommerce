import { useSearchParams } from "react-router-dom";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { useGetProductsQuery } from "./api/apiSlice";
// import type { Product } from "./Types/Product";

const App = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("_page")) || 1;
  const limit = Number(searchParams.get("_limit")) || 10;
  const { data, error, isLoading} = useGetProductsQuery({page, limit});
  const products = data?.products ?? [];


  if(isLoading) return <h1 className="w-full h-screen text-3xl font-bold flex items-center justify-center">isLoading...</h1>;
  if(error) return <div className="text-red-500">Error loading products</div>;

  return (
    <div className=" w-full md:w-[80%]   mx-auto p-3 ">
      <Header />
        <Products items={products}  page={page} limit={limit} setSearchParams={setSearchParams} total={data?.total ?? 0}/>
    </div>
  );
};

export default App;
