export default function SkeletonLoading(){

    return(
        <>
            
        <div role="status" class="max-w-[282px]   bg-[#121829] rounded-xl shadow-sm animate-pulse md:p-6 ">
             <div class=" h-[400px] max-w-[266]  mb-4 bg-[#20283E] rounded-sm ">
                
              </div>
              <div class="h-2.5 bg-[#20283E] rounded-full  w-48 mb-4"></div>
       
              <div class="flex items-center gap-2 mt-4">
                 <div class=" h-4 w-4 bg-[#20283E] rounded-full "></div>
                  <div class="h-2.5 bg-[#20283E] rounded-full  w-32 "></div>
             </div>
            <span class="sr-only">Loading...</span>
        </div>

        </>
    )
}