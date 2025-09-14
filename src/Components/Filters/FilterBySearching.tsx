
interface Props {
      search: (string | number);
      setSearch: (value : (string | number)) => void;

}
const FilterBySearching = ({ search, setSearch }: Props) => {
  return (
    <section>

        <input type="search" placeholder="Search Products..."  value={search}  onChange={(e)=>setSearch(e.target.value)}/>
      
    </section>
  )
}

export default FilterBySearching
