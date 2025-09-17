import Header from "./Components/Header";
import Products from "./Components/Products";
import { useGetProductsQuery } from "./api/apiSlice";

const App = () => {

  const { data: products=[], error, isLoading} = useGetProductsQuery();


  if(isLoading) return <h1 className="w-full h-screen text-3xl font-bold flex items-center justify-center">isLoading...</h1>;
  if(error) return <div className="text-red-500">Error loading products</div>;

  return (
    <div className=" w-full md:w-[80%]   mx-auto p-3 ">
      <Header />
        <Products items={products} />
    </div>
  );
};

export default App;
