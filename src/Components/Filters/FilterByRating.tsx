interface FilterByRatingProps{
    rating: number;
    setRating: (value: number)=> void;
}

const FilterByRating = ({ rating, setRating}: FilterByRatingProps) => {
    
  return (
    <div>
        <select value={rating} onChange={(e)=>setRating(Number(e.target.value))}>
        <option value={0}>All Ratings</option>
        <option value={1}>⭐ 1 & up</option>
        <option value={2}>⭐ 2 & up</option>
        <option value={3}>⭐ 3 & up</option>
        <option value={4}>⭐ 4 & up</option>
        <option value={5}>⭐ 5</option>
        </select>
    </div>
  )
}

export default FilterByRating
