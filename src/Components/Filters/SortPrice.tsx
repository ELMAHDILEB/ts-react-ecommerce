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
    <div>
        <select value={sortPrice} onChange={handleSortPrice}>
              <option value="">All</option>
              <option value="asc">Price: Low To High</option>
              <option value="desc">Price: High To Low</option>

        </select>
    </div>
  )
}

export default SortPrice
