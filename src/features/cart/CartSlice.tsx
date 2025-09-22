import { createSlice, type PayloadAction   } from "@reduxjs/toolkit";

interface CartItem{
    id: string;
    title:string;
    image:string;
    rating: number;
    price:number;
    quantity: number;
}
interface CartState{
   items:CartItem[];
}


// get product in localstorage
const savedCart = localStorage.getItem("cart");
const initialState: CartState ={
    items: savedCart ? JSON.parse(savedCart) : [],
}
export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
          addToCart:(state, action: PayloadAction<CartItem>)=>{
                   const existing = state.items.find(i => i.id === action.payload.id);
                   if(existing) {
                       existing.quantity += action.payload.quantity;
                   }else{
                    state.items.push(action.payload);
          }
           localStorage.setItem("cart", JSON.stringify(state.items));
          },
          removeFromCart:(state, action: PayloadAction<string>)=>{
                state.items = state.items.filter(item => item.id !== action.payload);
                localStorage.setItem("cart", JSON.stringify(state.items));
          },
          clearCart:(state)=>{
                state.items = [];
                localStorage.setItem("cart", JSON.stringify(state.items));
          },
          increaseQuantity:(state, action: PayloadAction<string>)=>{
               const item = state.items.find(i => i.id === action.payload);
               if(item) item.quantity += 1;
               localStorage.setItem("cart", JSON.stringify(state.items));
          },
          decreaseQuantity:(state, action: PayloadAction<string>)=>{
             const item = state.items.find(i => i.id === action.payload);
             if(item && item.quantity > 1) item.quantity -= 1;
             localStorage.setItem("cart", JSON.stringify(state.items));
          }
    }
})

export const  {addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export const cartrReducer = CartSlice.reducer;




