import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";

type ThemeContextType = {
      isDarkMode: boolean,
      toggleTheme: ()=> void,
}

export const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: false,
    toggleTheme: ()=>{}
})

type Props = {children: ReactNode};


export  const ThemeProvider = ({children} : Props) => {
   const [isDarkMode, setIsDarkMode] = useState<boolean>(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
   });

   useEffect(()=>{
     if(isDarkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
     }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
     }
   }, [isDarkMode]);

   const toggleTheme = useCallback(()=>{setIsDarkMode((prev)=>!prev)},[]);


    
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


