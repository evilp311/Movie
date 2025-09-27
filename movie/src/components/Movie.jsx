import Star from "../utils/star"
export default function Movie ({movie}){
    const{name, poster,released,runtime,plot,genres,image,rating,type}=movie
    return(
    <>
        <div className="px-[300px] pt-[40px] mb-[150px]    ">
            <div className='relative  '>
                <img src={image} className= "  w-full  h-[480px] rounded-3xl " alt="" />
                <div className=" absolute inset-0  h-[480px] rounded-3xl bg-[linear-gradient(180deg,rgba(54,44,146,0.4)_0%,rgba(18,98,151,0.4)_100%)]"></div>
                <div className="absolute backdrop-blur-xl  top-110 left-20 min-w-[560px] rounded-3xl h-[144px] pt-13  ">
                     <h1 className="text-[#EBEEF5] flex items-center justify-center text-[32px] rounded-3xl  fixed inset-0 backdrop-blur-xl bg-black/10 z-50 " ><span>{name}</span></h1>
                </div>
            </div>
        </div>
        
        <div className="flex gap-[80px] px-[380px] py-[80px] relative  ">
            
            <div className="">
                <img src={poster} alt="" className="rounded-3xl min-w-[480px] h-[720px]" />
            </div>
            <div className="mt-[80px]" >
                <p className="text-[#8E95A9] mt-[24px]">{plot}</p>
                <p className="mt-[24px] text-[#FFAD49] py-1 px-2   rounded-[8px] bg-[#000000A6] bg-[url('/img/Background.svg')] bg-cover  inline-flex items-center gap-1 "><Star/> <span>{rating}</span> </p>
                <div className="mt-[24px]">
                    <h2 className="text-[#767E94] text-[16px]">Type</h2>
                    <h1 className="text-[#C3C8D4] text-[20px]">{type}</h1>
                </div>
                <div className="mt-[24px]">
                    <h2 className="text-[#767E94] text-[16px]">Release Date:</h2>
                    <h1 className="text-[#C3C8D4] text-[20px]">{released}</h1>
                </div>
                <div className="mt-[24px]">
                    <h2 className="text-[#767E94] text-[16px]">Run time</h2>
                    <h1 className="text-[#C3C8D4] text-[20px]">{runtime}</h1>
                </div>
                <div className="mt-[24px]">
                    <h2 className="text-[#767E94] text-[16px]">Genres</h2>
                    <h1 className="text-[#C3C8D4] text-[20px]">{genres}</h1>
                </div>
            </div>
        </div>

    </>
     
    )
}