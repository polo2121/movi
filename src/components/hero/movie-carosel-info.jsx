import React from 'react'

const MovieCaroselInfo = ({ name, genre }) => {
    return (
        <>
            <span className='text-[14px] opacity-50 sm:w-12'>2023</span>
            <p className='text-[14px] line-clamp-2'>
                Worlds collide when the Flash uses his superpowers
                to travel  back in time to change the events of the past...
            </p>
        </>
    )
}

export default MovieCaroselInfo