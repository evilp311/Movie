import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import TabsGenre from "./components/TabsGenre"
import { Outlet, useNavigation } from "react-router"
import SkeletonLoading from "./components/SkeletonLoading"

function App() {
  


  return (
    <>
    <NavBar/>
    <div className=" relative bg-[url('/img/Background.svg')] bg-[#120F31]  bg-cover  bg-no-repeat   " >
        <main className="   ">
          <SearchBar/>
           <TabsGenre/>
        </main>
    </div>
    </>
    
  )
}

export default App
