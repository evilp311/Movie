import MovieList from "../components/MovieList";
import { useEffect } from "react";
export default function movieByGenre(){
      useEffect(()=>{
            window.scrollTo(0,0);
        },[])
    return(

        <div className=" pl-[140px] mt-[88px]  ">
             <MovieList />
        </div>

        
    )
}