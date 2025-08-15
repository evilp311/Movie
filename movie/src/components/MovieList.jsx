import MovieListItem from "./MovieListItem"

export default function MovieList({movie}){
    return(
       
            <>
                {movie && (
                    movie.map((movie)=>{
                        return(
                            <MovieListItem key={movie.id} id={movie.id} name={movie.name} image={movie.img} rating={movie.rating} />
                        )
                    })
                
                )
                    
                }
            </>
        
    )
}