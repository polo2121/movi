import React from 'react'

const MovieSlideSkeleton = () => {
    return (
        <div className='w-[400px] h-[329px] m-auto'>
            <div className='absolute w-[400px] h-[329px] m-auto inset-0 animate-pulse'>
                <div className='relative rounded-[30px] border-[6px] border-white w-[94%] h-full m-auto shadow-4xl bg-slate-300'>
                    <div className='overflow-hidden w-full h-full rounded-[30px]'>
                        <img className="object-none object-[center_bottom]" width="100%" height="100%" src="" alt="" />
                    </div>
                </div>

                <div className='absolute bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 w-full shadow-lg rounded-lg  flex flex-col gap-1'>

                    <h6 className='rounded-lg h-5 bg-slate-300'></h6>
                    <p className='h-10 bg-slate-300 rounded-lg'></p>
                </div>

                <div className='absolute top-10 right-[2rem] w-1/5 h-8 bg-movieSlideInfoBg  backdrop-blur-md p-2 rounded-[8px]'>
                </div>
            </div>
        </div>

    )
}

export default MovieSlideSkeleton