import { Routes, Route } from "react-router-dom";
import Header from "./Components/common/Header";
import Products from "./Components/products/Products";
import ShoppingCart from "./Components/cart/ShoppingCart";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "./services/apiSlice";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("_page")) || 1;
  const limit = Number(searchParams.get("_limit")) || 10;
  const { data, error, isLoading } = useGetProductsQuery({ page, limit });
  const products = data?.products ?? [];

  if (isLoading)
    return (
      <h1 className="w-full h-screen text-3xl font-bold flex items-center justify-center">
        isLoading...
      </h1>
    );
  if (error) return <div className="text-red-500">Error loading products</div>;

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              items={products}
              page={page}
              limit={limit}
              setSearchParams={setSearchParams}
              total={data?.total ?? 0}
            />
          }
        />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
};

export default App;
