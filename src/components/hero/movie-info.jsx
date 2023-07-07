import React from 'react'

const MovieInfo = ({ name }) => {
    return (
        <div className='absolute bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 w-full shadow-lg rounded-lg text-[17px] flex flex-col gap-1 cursor-pointer'>
            <h6 className='text-[17px] capitalize'>{name}</h6>
            <span className='font-normal opacity-50 text-[14px]'>Action Adventure</span>
            <p className='font-normal text-[14px]'>Worlds collide when the Flash uses his superpowers
                to travel  back in time to change the events of the past...
            </p>
        </div>
    )
}

export default MovieInfo