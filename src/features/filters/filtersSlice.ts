import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface filterState {
    category: string,
    search: string,
    sortPrice: "" | "asc" | "desc",
    rating: number,
}

const initialState: filterState ={
    category: "all",
    search: "",
    sortPrice: "",
    rating: 0,
}

export const filterSlice = createSlice({
     name: "filters",
     initialState,
     reducers: {
          setCategory:(state, action:PayloadAction<string>)=>{
                    state.category = action.payload;
          },
          setSearch: (state, action:PayloadAction<string>)=>{
               state.search = action.payload;
          },
          setSortPrice: (state, action:PayloadAction<"" | "asc" | "desc">)=>{
               state.sortPrice = action.payload;
          },
          setRating: (state, action:PayloadAction<number>)=>{
               state.rating = action.payload;
          },
     },

})

export const { setCategory, setSearch, setSortPrice, setRating } = filterSlice.actions;
export default filterSlice.reducer;