import React from 'react'

// - assets
import flash from '../../assets/images/the-flash-2x.png'


const MovieCard = () => {
    return (
        <div className='relative w-[205px] h-[307px] rounded-[0px] bg--700 min-w-[205px]'>

            <div className='w-[90%] h-full m-auto'>
                <div className='w-full bg--400 h-full'>
                    <img className="rounded-[16px] w-full h-full" src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg" alt="movie" />
                </div>
            </div>

            <div className='absolute bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 w-full shadow-lg text-[17px] flex flex-col gap-1 cursor-pointer rounded-md'>
                <h6 className='text-[17px] capitalize font-bold'>The Flash</h6>
                <span className='font-normal opacity-50 text-[14px]'>Action Adventure</span>
            </div>
        </div>
    )
}

export default MovieCard