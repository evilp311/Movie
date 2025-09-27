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
            
             <div className=" relative  min-h-screen ">
             <div className="absolute inset-0 rotate-x-180 bg-[url('/img/Background.svg')] bg-[#120F31]   bg-center bg-cover min-h-screen "></div>
                {movie&&(<Movie movie={movie}/>)}
             </div>
        </>
        
    )
}