import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen ">
        <Header/>
        <main className="flex-1 ">
             <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout;
