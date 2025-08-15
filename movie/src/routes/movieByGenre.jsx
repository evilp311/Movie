import { useLoaderData } from "react-router";
import getMovieByGenre from "../api/getMovieByGenre";
import MovieList from "../components/MovieList";
export async function movieByGenreLoader({params}){
    const movie=await getMovieByGenre(params.genre)
   
    return{movie}
}

export default function movieByGenre(){
    const {movie}=useLoaderData();
    return(
        <div className="grid grid-cols-4 pl-[140px] mt-[88px]  ">
            {console.log('hr',typeof movie)}
            {movie&& <MovieList movie={movie} key={movie.id} />}
        </div>
    )
}