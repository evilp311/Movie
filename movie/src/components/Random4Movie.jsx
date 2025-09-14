import { useLoaderData } from "react-router"
import get4RandomMovie from "../api/get4RandomMovie"
import MovieListItem from "./MovieListItem";
import { useNavigation } from "react-router";

export async function Loader4RandomMovie(){
    const randomMovie= await get4RandomMovie();
    return{randomMovie}
}

export default function Random4Movie(){
    const{randomMovie}=useLoaderData(); 
    const navigation=useNavigation();
    const isLoading=Boolean(navigation.location)
    return(
        <div className={`grid grid-cols-4 pl-[140px] mt-[88px] pr-[220px] pb-[120px] ${isLoading?'opacity-30 grayscale-100':''}` }>
           {randomMovie&& (
            randomMovie.map((movie)=>{
                return(
                  <MovieListItem key={movie.id} id={movie.id} name={movie.name} image={movie.img} rating={movie.rating} genre={movie.genres} />
                
            )})
           )}
        </div>
    )
}