import { useAppDispatch } from "../../app/hook";
import type { Product } from "../../Types/Product";
import { addToCart } from "../../features/cart/CartSlice";
import React, { useCallback } from "react";


interface CardProps{
product: Product;
}

const ProductCard = React.memo(
  ({product}: CardProps) => {

    const dispatch = useAppDispatch();


    const handleAdd = useCallback(()=>{
      dispatch(
        addToCart({
             id: String(product.id),
             title: product.title,
             image: String(product.thumbnail),
             price: product.price,
             rating: product.rating,
             quantity: 1,
  
        }));
    }, [dispatch, product]);

  return (

        <article key={product.id} className="w-full h-auto border-gray-300 bg-slate-300 dark:bg-gray-900 dark:border-gray-700 rounded-xl flex flex-col justify-between items-center gap-2 p-2 ">
            <figure className="w-full h-[150px]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </figure>

            <header className="w-full md:w-[80%] px-2 md:px-0 text-center">
              <h3>{product.title}</h3>
              <section className="flex justify-between">
                <p>{product.price}$</p>
                <p>
                ⭐ {product.rating}
                  
                </p>
              </section>
              <p className="capitalize ">
                Category: <span className="font-bold">{product.category}</span>
              </p>
            </header>

            <footer className="w-full md:w-[80%] px-2 md:px-0 text-center">
              <button className="px-4 py-2 bg-green-400 rounded-xl capitalize" onClick={handleAdd} >
               Add To Cart
              </button>
            </footer>
          </article>

  )
}
)

export default ProductCard;
