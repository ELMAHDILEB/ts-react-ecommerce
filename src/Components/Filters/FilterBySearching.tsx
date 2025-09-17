interface FilterBySearchingProps {
  search: string;
  setSearch: (value: string) => void;
}

const FilterBySearching = ({search, setSearch}: FilterBySearchingProps) => {

  return (
    <section className="w-full h-10">

        <input className="w-full p-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="search" placeholder="Search Products..."  value={search}  onChange={(e)=>setSearch(e.target.value)}/>
      
    </section>
  )
}

export default FilterBySearching
