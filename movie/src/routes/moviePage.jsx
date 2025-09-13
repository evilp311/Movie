import { useLoaderData } from "react-router"
import getMovieByID from "../api/getMovieById"
import Movie from "../components/Movie"
import NavBar from "../components/NavBar"
import { useEffect } from "react"
export async function movieLoader({params}){
    const movie=await getMovieByID(params.id)
    return{movie}
}

export default function moviePage (){
    const{movie}=useLoaderData()
      useEffect(()=>{
            window.scrollTo(0,0);
        },[])
    return(
        <>
            <NavBar/>
             <div className="bg-[url('/img/Background.svg')] bg-[#120F31] min-h-screen bg-cover">
                {movie&&(<Movie movie={movie}/>)}
             </div>
        </>
        
    )
}