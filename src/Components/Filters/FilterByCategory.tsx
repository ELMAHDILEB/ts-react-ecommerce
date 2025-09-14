import type { Product } from "../../Types/Product";

interface Props{
    category: string;
    setCategory: (value: string)=> void;
    items: Product[];
}

const FilterByCategory = ({category, setCategory, items}: Props) => {
  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <select value={category} onChange={(e)=> setCategory(e.target.value)}>
          <option value="all">All</option>
          {
              categories.map((cat)=>
                  <option key={cat} value={cat}>
                     {cat}
                  </option>
              )
          }
    </select>
  )
}

export default FilterByCategory;
