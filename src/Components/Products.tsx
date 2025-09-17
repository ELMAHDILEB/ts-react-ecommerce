
import type { Product } from "../Types/Product";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterBySearching from "./Filters/FilterBySearching";
import SortPrice from "./Filters/SortPrice";
import { useGetProductsQuery } from "../api/apiSlice";
import { useAppDispatch, useAppSelector } from "../Store/hook";
import { setCategory, setRating, setSearch, setSortPrice } from "../features/filters/filtersSlice";
import FilterByRating from "./Filters/FilterByRating";
import { useSearchParams } from "react-router-dom";

const Products = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const page = Number(searchParams.get("_page") || 1);
  const limit = Number(searchParams.get("limit") || 20);

  const { data, isLoading } = useGetProductsQuery({page,limit});
  const { category, search, sortPrice, rating } = useAppSelector((state)=> state.filters);

  if (isLoading) return <p>Loading...</p>;
  let filtredItems = data?.products ? [...data.products] : [];[...filtredItems]
   
  if(category !== "all"){
    filtredItems = filtredItems.filter((item: any) =>item.category === category);
  }

  if(search){
    filtredItems = filtredItems.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()) );
  }
  if(sortPrice === "asc"){
    filtredItems = [...filtredItems].sort((a,b) =>  a.price - b.price)
  }else if(sortPrice === "desc"){
    filtredItems = [...filtredItems].sort((a,b)=> b.price - a.price)
  }

  if(rating > 0){
    filtredItems = filtredItems.filter((item: any)=> item.rating >= rating);
  }

  return (
    <main className="w-full  flex flex-col  pt-10 text-black dark:text-white">
      <section className="w-full p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-3">
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
          <article key={item.id} className="w-full h-auto border-gray-300 bg-slate-300 dark:bg-gray-900 dark:border-gray-700 rounded-xl flex flex-col justify-between items-center gap-2 p-2 ">
            <figure className="w-full h-[150px]">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </figure>

            <header className="w-full md:w-[80%] px-2 md:px-0 text-center">
              <h3>{item.title}</h3>
              <section className="flex justify-between">
                <p>{item.price}$</p>
                <p>
                ⭐ {item.rating}
                  
                </p>
              </section>
              <p className="capitalize ">
                Category: <span className="font-bold">{item.category}</span>
              </p>
            </header>

            <footer className="w-full md:w-[80%] px-2 md:px-0 text-center">
              <button className="px-4 py-2 bg-green-400 rounded-xl capitalize ">
                add to cart +
              </button>
            </footer>
          </article>))
        ))}
      </section>

       <footer>
        <section className="w-full flex items-center justify-center gap-5">
          <button className="" disabled={page === 1} onClick={()=> setSearchParams({_page: String(Math.max(page -1, 1)), _limit: String(limit)})}>Prev</button>
          <span className="">{page} / {data?.total}</span>
          <button className="" disabled={data?.total && page >= Math.ceil(data.total / limit) } onClick={()=> setSearchParams({_page: String(page + 1), _limit: String(limit)})}>Next</button>
        </section>
       </footer>
    </main>


  );
};

export default Products;
