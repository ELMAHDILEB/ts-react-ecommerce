
import type { Product } from "../Types/Product";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterBySearching from "./Filters/FilterBySearching";
import SortPrice from "./Filters/SortPrice";
import { useGetProductsQuery } from "../api/apiSlice";
import { useAppDispatch, useAppSelector } from "../Store/hook";
import { setCategory, setRating, setSearch, setSortPrice } from "../features/filters/filtersSlice";
import FilterByRating from "./Filters/FilterByRating";


interface itemsProducts {
  items: Product[];
}

const Products = ({ items }: itemsProducts) => {

  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetProductsQuery(undefined);
  const { category, search, sortPrice, rating } = useAppSelector((state)=> state.filters);

  if (isLoading) return <p>Loading...</p>;
  let filtredItems = [...(data || [])];
   
  if(category !== "all"){
    filtredItems = filtredItems.filter((item: any) =>item.category === category);
  }

  if(search){
    filtredItems = filtredItems.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()) );
  }
  if(sortPrice === "asc"){
    filtredItems = filtredItems.sort((a,b) =>  a.price - b.price)
  }else if(sortPrice === "desc"){
    filtredItems = filtredItems.sort((a,b)=> b.price - a.price)
  }

  if(rating > 0){
    filtredItems = filtredItems.filter((item: any)=> item.rating >= rating);
  }

  return (
    <main className="w-full h-auto flex flex-col  pt-10">
      <section className="w-full p-2 flex flex-wrap items-center justify-between m-3">
        <FilterBySearching  search={search} setSearch={(value: string)=> dispatch(setSearch(value))}/>
        <FilterByCategory  category={category} setCategory={(value: string)=> dispatch(setCategory(value))} items={items}/>
        <SortPrice  sortPrice={sortPrice} setSortPrice={(value: "" | "asc" | "desc")=> dispatch(setSortPrice(value))}/>
        <FilterByRating rating={rating} setRating={(value: number)=> dispatch(setRating(value))}/>
      </section>

      <section className="w-full flex flex-wrap items-center justify-center  gap-3">
        {
            filtredItems.length === 0 ? (<p className="text-xl font-bold text-red-500">
            No products found.
          </p>) :
  ((      filtredItems?.map((item) => (
          <article key={item.id} className="w-[300px] h-auto bg-slate-400 rounded-xl flex flex-col justify-between items-center gap-2 p-2 ">
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

      {/* <ul className="w-full h-full flex flex-wrap items-center justify-between gap-3">
        {items.map((item) => (
          <li key={item.id} className="w-[200px] h-[300px]  bg-slate-500 flex flex-col items-center rounded-b-xl">
              <div className="w-full h-[130px]">
              <img  src={item.thumbnail}alt={item.title} className="w-full h-full object-contain"/>
              </div>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul> */}
    </main>
  );
};

export default Products;
