import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from "../../features/cart/CartSlice";

const ShoppingCart = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const subtotal = items.reduce((acc, item)=> acc + item.price * item.quantity, 0 )

  return (

      <section className="w-full h-[calc(100vh-50px)] p-2 flex flex-col items-center justify-between gap-10">
        <h1>Your Shopping Cart</h1>

        <div className="w-full md:w-[80%] max-h-[60vh]  flex flex-col items-center gap-5  space-y-4 overflow-y-auto overflow-x-none">
             {
              items.length === 0 ? (
                <p>Cart is Empty</p>
              ) : (
                items.map(item =>{
                 return  <article key={item.id} className="w-full h-auto border-gray-300 bg-slate-300 dark:bg-gray-900 dark:border-gray-700 rounded-xl flex justify-between md:justify-around items-center gap-2 p-2 ">
                  <figure className=" w-[100px] h-[100px] rounded-[50%] ">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain rounded-[50%]" />
                  </figure>
      
                  <header className="flex flex-col  items-center gap-5  text-center">
                    <h3>{item.title}</h3>
                    <section className="flex justify-between">
                      <p>{item.price}$</p>
                      <p>⭐ {item.rating}</p>
                    </section>
                  </header>
      
                  <footer className="flex items-center gap-5 px-2 md:px-0 text-center">
                    <button className="px-2  rounded-[5px] bg-slate-500" onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>
                    <span className="">{item.quantity}</span>
                    <button className="px-2  rounded-[5px] bg-slate-500" onClick={()=> dispatch(increaseQuantity(item.id))}>+</button>
                  </footer>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </article>
                })
              )
             }

        </div>

        <div className="w-full md:w-[80%] flex items-center justify-between">
          <NavLink to="/" className="underline cursor-pointer">
          Back To Shop
          </NavLink>
            <span>SubTotal: {subtotal.toFixed(2)}$</span>
            {items.length > 0 && <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>}
            {items.length !== 0 &&   <button className="cursor-pointer px-2 py-4 rounded-xl bg-green-500">Check Out</button>}
        </div>
      </section>

  );
};

export default ShoppingCart;
