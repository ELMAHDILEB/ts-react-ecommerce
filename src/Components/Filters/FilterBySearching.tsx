interface FilterBySearchingProps {
  search: string;
  setSearch: (value: string) => void;
}

const FilterBySearching = ({search, setSearch}: FilterBySearchingProps) => {

  return (
    <section className="w-auto p-2 flex-1">

        <input className="w-full p-2  outline-none focus:border-gray-300 border-2 border-solid rounded-[5px]" type="search" placeholder="Search Products..."  value={search}  onChange={(e)=>setSearch(e.target.value)}/>
      
    </section>
  )
}

export default FilterBySearching
