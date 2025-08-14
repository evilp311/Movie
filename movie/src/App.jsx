import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import { Outlet } from "react-router"
function App() {

  return (
    <>
    <NavBar/>
    <div className="bg-[url('/img/Background.svg')] bg-[#120F31] min-h-screen bg-cover bg-center bg-no-repeat" >
        
        <main>
          <SearchBar/>
        </main>
        
        <Outlet/>

    </div>
    </>
    
  )
}

export default App
