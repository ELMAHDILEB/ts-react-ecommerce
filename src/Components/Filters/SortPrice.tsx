interface Props {
    SortOrder: "" | "asc" | "desc";
    setSortOrder: (value: "" | "asc" | "desc") => void;
}

const SortPrice = ({SortOrder, setSortOrder}: Props) => {
  const handleSortPrice = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      const value = e.target.value;

      if(value === "" || value === "asc" || value === "desc") {
        setSortOrder(value);
      }
  }
  return (
    <div>
        <select value={SortOrder} onChange={handleSortPrice}>
              <option value="">Default</option>
              <option value="asc">Price: Low To High</option>
              <option value="desc">Price: High To Low</option>

        </select>
    </div>
  )
}

export default SortPrice
