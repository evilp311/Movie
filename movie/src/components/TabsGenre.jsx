import { useLoaderData } from "react-router"
import { NavLink } from "react-router"
import { Outlet } from "react-router"
import getGenre from "../api/getGenre"
import { Button } from "flowbite-react";

export async function genreMovie() {
 
  const genres=await getGenre();
  return {genres}
}

export default function TabsGenre(){
  
   const {genres}=useLoaderData()
    return(
        <>
            { genres &&(
                <div className=" flex flex-wrap  bg-[#0a1b2b] rounded-xl p-2 mt-[88px]  w-[1400px] ml-[140px] ">
                    {genres.map((movie,movieIndex)=>{
                        return(
                            
                                <NavLink to={movie} key={movieIndex} >
                                    {({isActive})=>{
                                        return(
                                          
                                            <Button  className={"text-[#ffff] m-1.5 bg-[#0a1b2b] cursor-pointer hover:bg-[#7B6EF6] " + (isActive&&'bg-[#7B6EF6]')}>
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