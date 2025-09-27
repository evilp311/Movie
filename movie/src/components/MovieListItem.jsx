import { Card } from "flowbite-react";
import Star from "../utils/star";
import { Link } from "react-router";
export default function MovieListItem({name,id,image,rating}){
  
    return(

      <Link to={`/movie/${id}`} className="max-w-[282px] mb-5 ">
        <Card
          className=" relative" applyTheme={{root:{base:'replace'}}}
          renderImage={() =><img src={image} className=" z-1 rounded-[8px] max-h-[394px] min-h-[394px] "/>}
        >
          <div className=" max-w-[282px]  absolute inset-0  h-[480px] rounded-[8px]  bg-[url('/img/Background.svg')] bg-cover   "></div>
          <p className="absolute top-8 text-[#FFAD49] py-1 px-2 z-1  rounded-[8px] bg-[#000000A6] bg-[url('/img/Background.svg')] bg-cover bg-center  flex items-center gap-1 "><Star/> <span>{rating}</span> </p>
          <h5 className=" absolute text-[16px] font-bold tracking-tight text-[#EBEEF5] z-1 ">
           {name}
          </h5>
          
         </Card>
      
      </Link>
     
    )
}