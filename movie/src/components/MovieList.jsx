import MovieListItem from "./MovieListItem"
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState,useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router";
import getMovieByGenre from'../api/getMovieByGenre'
import SkeletonLoading from "./SkeletonLoading";



export async function movieByGenreLoader({params}){
    const movie=await getMovieByGenre(params.genre)
    return{movie,genre: params.genre}
}



export default function MovieList(){
     const {movie,genre}=useLoaderData()
    const[page,setPage]=useState(2)
    const[movies,setMovies]=useState(movie)
    const [hasMore, setHasMore] = useState(true)
    
     useEffect(() => {
        setMovies(movie)
        setPage(2)
        setHasMore(true)
    }, [genre, movie])


    const getData=()=>{
        if (!hasMore) return;
     const  fetchmovie= async ()=>{
        try{
            const res= await axios.get(`https://moviesapi.codingfront.dev/api/v1/genres/${genre}/movies?page=${page}`)
            if (res.data.data.length === 0) {
                    setHasMore(false)
                    return
                }
            const data= res.data.data.map(({id, title, poster, imdb_rating})=>({
                id: id,
                name: title,
                img: poster,
                rating: imdb_rating,
            }))
            setMovies((m)=>[...m,...data])
            setPage( page + 1)
        }catch(e){
            console.log('error',e.error.massage)
            setHasMore(false)
        }
    }
        
        fetchmovie();
    }
   
    return(
       
            <InfiniteScroll className="grid grid-cols-4  w-[1500px]"
             dataLength={movies.length}
             next={getData}
             hasMore={hasMore}
             loader={<SkeletonLoading/>}
             endMessage={
                <p className="text-center text-red-700">
                    <b>you have seen it all</b>
                </p>
             }
            >
               
               { movies && ( movies.map((movie)=>{
                        return(
                            <MovieListItem key={movie.id} id={movie.id} name={movie.name} image={movie.img} rating={movie.rating} genre={genre} />
                        )
                    })
                
                )}
                    
               
            </InfiniteScroll>
        
         )
}