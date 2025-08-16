import { Card } from "flowbite-react";
import Star from "../utils/star";
import { Link } from "react-router";
export default function MovieListItem({name,id,image,rating}){
  
    return(

      <Link to={`/movie/${id}`} className="w-[282px] mb-5">
        <Card
          className=" relative" applyTheme={{root:{base:'replace'}}}
          renderImage={() =><img src={image} className="rounded-[8px]"/>}
        >
          <p className="absolute top-8 text-[#FFAD49] py-1 px-2  rounded-[8px] bg-[#331d1c] flex items-center gap-1 "><Star/> <span>{rating}</span> </p>
          <h5 className="text-[16px] font-bold tracking-tight text-[#EBEEF5] ">
           {name}
          </h5>
          
         </Card>
      
      </Link>
     
    )
}