import { useState } from "react";
import type { Product } from "../Types/Product";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterBySearching from "./Filters/FilterBySearching";
import SortPrice from "./Filters/SortPrice";

interface itemsProducts {
  items: Product[];
}

const Products = ({ items }: itemsProducts) => {
  const [category, setCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState<"asc" | "desc" | "">("");
  const [search, setSearch] = useState("");

  let filtredItems = items;
   
  if(category !== "all"){
    filtredItems = filtredItems.filter(item =>item.category === category);
  }

  if(search){
    filtredItems = filtredItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) );
  }
  if(sortPrice === "asc"){
    filtredItems = filtredItems.sort((a,b) =>  a.price - b.price)
  }else if(sortPrice === "desc"){
    filtredItems = filtredItems.sort((a,b)=> b.price - a.price)
  }

  return (
    <main className="w-full h-auto flex flex-col  pt-10">
      <section className="w-full p-2 flex flex-wrap items-center justify-between m-3">
        <FilterBySearching  search={search} setSearch={setSearch}/>
        <FilterByCategory  category={category} setCategory={setCategory} items={items}/>
        <SortPrice  SortOrder={sortPrice} setSortOrder={setSortPrice}/>
      </section>

      <section className="w-full flex flex-wrap items-center justify-between gap-3">
        {filtredItems.map((item) => (
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
                  {item.rating}
                  <span className="text-yellow-400">&#9733;</span>
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
          </article>
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
