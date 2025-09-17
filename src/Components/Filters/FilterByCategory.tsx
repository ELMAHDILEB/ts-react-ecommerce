import { useMemo } from "react";
import type { Product } from "../../Types/Product";

interface FilterByCategoryProps{
  category: string;
  setCategory: (value: string)=> void;
  items: Product[];
}

const FilterByCategory = ({category, setCategory, items}: FilterByCategoryProps) => {

  const categories = useMemo(()=>{
    if(!Array.isArray(items)) return [];
    return Array.from(new Set(items?.map(item => item.category) || []) )
  },[items]);

  return (
    <select value={category} onChange={(e)=> setCategory(e.target.value)} className="w-full h-10  px-3 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">All</option>
          {
              categories.map((cat)=>
                  <option key={cat} value={cat} className="capitalize">
                     {cat}
                  </option>
              )
          }
    </select>
  )
}

export default FilterByCategory;
