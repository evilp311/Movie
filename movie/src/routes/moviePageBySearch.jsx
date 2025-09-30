import NavBar from "../components/NavBar";
import { useLoaderData } from "react-router";
import { getMovieBySearchName } from "../api/getMovieBySearchName";
import Movie from "../components/Movie";
import NotFoundMovie from "../components/NotFoundMovie";
import { useEffect } from "react";
import { useNavigation } from "react-router";
import MovieListItem from "../components/MovieListItem"

export async function movieByNameLoader({params}){
    const movie= await getMovieBySearchName(params.name)
    return{movie}

}

export default function moviePageBySearch(){
    const{movie}=useLoaderData();
      useEffect(()=>{
            window.scrollTo(0,0);
        },[])
     const navigation=useNavigation();
    const isLoading=Boolean(navigation.location)
    console.log(movie)
    return(
        <>
            <NavBar/>
            <div className="bg-[url('/img/Background.svg')] bg-[#120F31] min-h-screen  bg-cover  bg-no-repeat ">

                        <div className={`grid grid-cols-4 w-[1210px] pt-[88px]  m-auto pb-[120px] ${isLoading?'opacity-30 grayscale-100':''}` }>
                             {movie&& (
                                  movie.map((movie)=>{
                              return(
                              <MovieListItem key={movie.id} id={movie.id} name={movie.name} image={movie.img} rating={movie.rating} genre={movie.genres} />
                          
                            )})
                           )}
                         </div>
            </div>
        
        </>
    )
}