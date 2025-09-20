import type { Product } from "../Types/Product";

interface FilterProps {
    category: string;
    search: string;
    sortPrice: "" | "asc" | "desc"
    rating:number;
}

export const filterProducts = (items: Product[], filterProduct: FilterProps): Product[]=>{
    let filtredItems = [...items];

    const {category, search, sortPrice, rating} = filterProduct;

    if(category !== "all"){
        filtredItems = filtredItems.filter((item: any) =>item.category === category);
      }
    
      if(search){
        filtredItems = filtredItems.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()) );
      }
      if(sortPrice === "asc"){
        filtredItems = [...filtredItems].sort((a,b) =>  a.price - b.price)
      }else if(sortPrice === "desc"){
        filtredItems = [...filtredItems].sort((a,b)=> b.price - a.price)
      }
    
      if(rating > 0){
        filtredItems = filtredItems.filter((item: any)=> item.rating >= rating);
      }

      return filtredItems;
}