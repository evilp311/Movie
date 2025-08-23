import NavBar from "../components/NavBar";
import { useLoaderData } from "react-router";
import { getMovieBySearchName } from "../api/getMovieBySearchName";
import Movie from "../components/Movie";
import ErrorPage from "./errorPage";
import NotFoundMovie from "../components/NotFoundMovie";
export async function movieByNameLoader({params}){
    const movie= await getMovieBySearchName(params.name)
    return{movie}

}

export default function moviePageBySearch(){
    const{movie}=useLoaderData();
    console.log( movie)
    return(
        <>
            <NavBar/>
            <div className="bg-[url('/img/Background.svg')] bg-[#120F31] min-h-screen bg-cover">
            {movie.length===0?<NotFoundMovie/>:<Movie movie={movie}/>}
            
            
            </div>
        </>
    )
}