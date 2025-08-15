import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import TabsGenre from "./components/TabsGenre"
import { Outlet } from "react-router"
function App() {

  return (
    <>
    <NavBar/>
    <div className="bg-[url('/img/Background.svg')] bg-[#120F31] h-[100%] bg-cover  " >
        <main>
          <SearchBar/>
        </main>
        <TabsGenre/>
        <Outlet/>

    </div>
    </>
    
  )
}

export default App
