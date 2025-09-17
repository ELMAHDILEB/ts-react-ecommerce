interface FilterBySearchingProps {
  search: string;
  setSearch: (value: string) => void;
}

const FilterBySearching = ({search, setSearch}: FilterBySearchingProps) => {

  return (
    <section>

        <input type="search" placeholder="Search Products..."  value={search}  onChange={(e)=>setSearch(e.target.value)}/>
      
    </section>
  )
}

export default FilterBySearching
