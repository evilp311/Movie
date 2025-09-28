import MovieListItem from "./MovieListItem"
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState,useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router";
import SkeletonLoading from "./SkeletonLoading";
import BackToTop from "../utils/arrowUp";
import { useCallback } from "react";
import getAllMovies from "../api/getAllMovie";
import { useNavigation } from "react-router";

export async function allMovieLoder(){
        const allmovie=await getAllMovies()
        return {allmovie}

}

export default function allmovies(){

    const {allmovie}=useLoaderData()
    const[page,setPage]=useState(2)
    const[movies,setMovies]=useState(allmovie)
    const [hasMore, setHasMore] = useState(true)
     useEffect(() => {
        setMovies(allmovie)
        setPage(2)
        setHasMore(true)
    }, [ allmovie])

    const scrolltoTop=useCallback(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    },[])

    const getData=()=>{
        if (!hasMore) return;
     const  fetchmovie= async ()=>{
        try{
            const res= await axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`)
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
        
            <InfiniteScroll className="grid grid-cols-4  w-[1210px] m-auto  mt-[88px] "
             dataLength={movies.length}
             next={getData}
             hasMore={hasMore}
             loader={<SkeletonLoading/>}
             endMessage={
                <div className=" flex gap-2 justify-center items-center text-[#7B6EF6]  text-2xl cursor-pointer " onClick={()=>{scrolltoTop()}}>
                  <button>
                    Back To Top 
                 </button>
                 <BackToTop/>
                </div>
               
             }
            >
               
               { movies && ( movies.map((movie)=>{
                        return(
                            <MovieListItem key={movie.id} id={movie.id} name={movie.name} image={movie.img} rating={movie.rating}  />
                        )
                    })
                
                )}
                    
               
            </InfiniteScroll>
        
        
    )
}