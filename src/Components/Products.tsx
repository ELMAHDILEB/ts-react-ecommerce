import type { Product } from "../Types/Product";
// import FilterByCategory from "./Filters/FilterByCategory";
// import FilterBySearching from "./Filters/FilterBySearching";
// import SortPrice from "./Filters/SortPrice";

interface itemsProducts {
  items: Product[];
}

const Products = ({ items }: itemsProducts) => {
  return (
    <div className="h-[calc(100vh-50px)] flex flex-col items-center  pt-10">
      {/* <FilterBySearching />
      <FilterByCategory />
      <SortPrice /> */}
      
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
