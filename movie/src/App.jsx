import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <>
    <NavBar/>
    <div className="bg-[url('/img/Background.svg')] bg-[#120F31] min-h-screen bg-cover bg-center bg-no-repeat" >
        
        <main>
          <SearchBar/>
        </main>
        

    </div>
    </>
    
  )
}

export default App
