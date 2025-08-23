import Search from '../utils/searchIcon'
import {  useState,useEffect } from 'react'
import { Link, useLoaderData } from 'react-router'
import { getMovieBySearchName } from '../api/getMovieBySearchName'



export default function SearchBar(){
    const [searchValue,setSearchValue]=useState('')
    const[loading,setLoading]=useState(false)

    async function movieByNameLoader(searchValue){
   
        if(!searchValue || loading){return}

        try{
            setLoading(true)
            const movie=await getMovieBySearchName(searchValue)
            setSearchValue('')
            return console.log(movie)

        }catch(err){
            console.log(err.massage)
        }finally{
            setLoading(false)
        } 
    }
  
    
    return(
        <div className="pl-[155px] pt-[80px]">
            <h1 className="text-[64px]/[80px] text-gray-50 ">MaileHereko</h1>
            <p className="text-[#8e95a9] text-[16px]/[24px] mt-[16px] ">List of movies and TV Shows, I,<span className="text-span">Pramod Poudel</span>  have watched till date. <br /> Explore what I have watched and also feel free to make a suggestion. 😉</p>
            <form action="" className=' flex items-center gap-4 px-4 py-3 mt-6  w-[344px] h-[64px] border-[1px] rounded-xl border-[#323B54] '>
              <Link to={`search/${searchValue}`}>
                    <button className='cursor-pointer'
                
                ><Search/></button>
              </Link>  
                <input type="text" value={searchValue} onChange={(e)=>{
                    setSearchValue(e.target.value)
                }} placeholder='Search Movies or TV Shows' className="text-[#475069] text-center min-w-[227px] h-[40px] " />
            </form>


        </div>
    )
}