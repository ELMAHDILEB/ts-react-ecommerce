import {FilterByCategory, FilterBySearching, FilterByRating, SortPrice} from "../Filters/Filters.tsx";
import { setCategory, setRating, setSearch, setSortPrice } from "../../features/filters/filtersSlice.ts";
import { useGetProductsQuery } from "../../services/apiSlice.ts";
import { useAppDispatch, useAppSelector } from "../../app/hook.ts";
import { filterProducts } from "../../Utils/FilterUtils.ts"
import type { Product } from "../../Types/Product.ts";
import ProductCard from "./ProductCard.tsx";

interface ProductsProps { 
    items: Product[];
    page: number;
    limit: number; 
    setSearchParams: (params: Record<string,string>) => void;
    total: number; 
}

const Products = ({page, limit, setSearchParams}: ProductsProps) => {

  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetProductsQuery({page,limit});
  const { category, search, sortPrice, rating } = useAppSelector((state)=> state.filters);
  const totalPages = data?.total ? Math.ceil(data.total / limit) : 1;

  if (isLoading) return <p>Loading...</p>;
  let filtredItems = filterProducts(data?.products || [], { category, search, sortPrice, rating})
  return (
    <main className="w-full  flex flex-col  pt-10 text-black dark:text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:m-3 p-2">
        <FilterBySearching  search={search} setSearch={(value: string)=> dispatch(setSearch(value))}/>
        <FilterByCategory  category={category} setCategory={(value: string)=> dispatch(setCategory(value))} items={data?.products || []}/>
        <SortPrice  sortPrice={sortPrice} setSortPrice={(value: "" | "asc" | "desc")=> dispatch(setSortPrice(value))}/>
        <FilterByRating rating={rating} setRating={(value: number)=> dispatch(setRating(value))}/>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {
            filtredItems.length === 0 ? (<p className="text-xl font-bold text-red-500">
            No products found.
          </p>) :
  ((      filtredItems?.map((item) => (
           <ProductCard key={item.id} product={item}/>))
        ))}
      </section>

       <footer>
      {
        filtredItems.length > 0 &&   <section className="w-full flex items-center justify-center gap-5">
        <button className="" disabled={page === 1} onClick={()=> setSearchParams({_page: String(Math.max(page -1, 1)), _limit: String(limit)})}>Prev</button>
        <span className="">{page} / {data?.total}</span>
        <button disabled={page >= totalPages} onClick={()=> setSearchParams({_page: String(page + 1), _limit: String(limit)})}>Next</button>
      </section> 

      }
       </footer>
    </main>


  );
};

export default Products;
