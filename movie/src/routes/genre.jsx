import { useLoaderData } from "react-router"
import { NavLink } from "react-router"
import { Outlet } from "react-router"
import getGenre from "../api/getGenre"
import { Button } from "flowbite-react";

export async function genreMovie() {
 
  const genres=await getGenre();
  return {genres}
}

export default function Genre(){
  
   const {genres}=useLoaderData()
    return(
        <>
            { genres &&(
                <div className=" flex flex-wrap  bg-[#0a1b2b] rounded-xl p-2 mt-[88px]  mx-[150px] ">
                    {genres.map((movie,movieIndex)=>{
                        return(
                            
                                <NavLink to={movie} key={movieIndex} >
                                    {({isActive})=>{
                                        return(
                                          
                                            <Button  className={"text-[#8E95A9] m-1.5 bg-[#0a1b2b] cursor-pointer " + (isActive&&'bg-[#7B6EF6]')}>
                                                {movie}
                                           </Button>
                                        )
                                    }

                                    }
                                </NavLink>
                            
                        )
                    })}
                </div>
            )}

            <Outlet/>
        </>
    )
}