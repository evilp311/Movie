import { useRouteError } from "react-router"
import NavBarError from "../components/NavBarError"
import { Link } from "react-router"
export default function ErrorPage(){
    const error=useRouteError()
    return(
        <>
        <NavBarError/>
        <div className="bg-[url('/img/Background.svg')] bg-[#120F31] min-h-screen bg-cover bg-center bg-no-repeat" >
            <div className=" text-center "> 
                <div className="pt-10">
                    <img src="../img/error-img.svg" className="inline-block rounded-3xl w-[400px] h-[320px]" alt="" />
                </div>
                <div className="mt-10 ">
                         <h5 className="text-5xl font-bold tracking-tight text-[#EBEEF5] ">
                           Lost your way?
                         </h5>
                         <p className="font-[Popins] text-[16px] text-[#8E95A9] mt-[18px] mb-6 ">
                            {error.message}                       
                         </p>
                        <Link to={'/'}>
                             <button className="w-[139px] h-[56px] text-[#FFFFFF] bg-[#7B6EF6] cursor-pointer hover:bg-[#5a53a0] rounded-xl border-2 border-[#7B6EF6] py-4 px-8  ">
                               Go Home
                             </button>
                        </Link>
                        
                </div>
            </div>
        </div>
        </>
    )
}