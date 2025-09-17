interface FilterByRatingProps{
    rating: number;
    setRating: (value: number)=> void;
}

const FilterByRating = ({ rating, setRating}: FilterByRatingProps) => {
    
  return (
    <div className="w-full h-10  "> 
        <select value={rating} onChange={(e)=>setRating(Number(e.target.value))} className="w-full h-full px-3 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize">
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
