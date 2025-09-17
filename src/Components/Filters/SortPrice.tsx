interface sortPriceProps{
  sortPrice: string;
  setSortPrice: (value: "" | "asc" | "desc")=> void;
}

 const SortPrice = ({sortPrice, setSortPrice}: sortPriceProps) => {


  const handleSortPrice = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      const value = e.target.value as  "" | "asc" | "desc"

      if(value === "" || value === "asc" || value === "desc") {
            setSortPrice(value);
      }
  }
  return (
    <div className="w-full h-10">
        <select value={sortPrice} onChange={handleSortPrice} className="w-full h-full px-3 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize">
              <option value="">All</option>
              <option value="asc">Price: Low To High</option>
              <option value="desc">Price: High To Low</option>

        </select>
    </div>
  )
}

export default SortPrice
