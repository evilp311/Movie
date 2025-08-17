import SkeletonLoading from "./SkeletonLoading";
export default function SkeletonLoadingList(){
    return(
        <div className='grid grid-cols-4 pl-[140px] mt-[88px] pr-[220px]'>
            <SkeletonLoading/>
            <SkeletonLoading/>
            <SkeletonLoading/>
            <SkeletonLoading/>
        </div>
    )
}