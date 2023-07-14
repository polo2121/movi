import React from 'react'

const MovieInfo = ({ name, overview }) => {
    return (
        <div className='absolute bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 w-full shadow-lg rounded-lg text-[17px] flex flex-col gap-1 cursor-pointer'>
            <h6 className='text-[17px] capitalize hover:text-blue-normal'>{name}</h6>
            <p className='font-normal text-[14px] line-clamp-3'>{overview}</p>
        </div>
    )
}

export default MovieInfo