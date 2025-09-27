import MovieList from "../components/MovieList";
import { useEffect } from "react";
import { useNavigation } from "react-router";
export default function movieByGenre(){
      useEffect(()=>{
            window.scrollTo(0,0);
        },[])
    const navigation=useNavigation();
    const isLoading=Boolean(navigation.location)
    return(

        <div className={`  ${isLoading?'opacity-30 grayscale-100':''} `}   >
             <MovieList />
        </div>

        
    )
}