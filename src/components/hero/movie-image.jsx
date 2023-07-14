import React from 'react'

// - assets 


const MovieImage = ({ image }) => {
    return (
        <div className='relative rounded-[30px] border-[6px] border-white w-[94%] h-full m-auto shadow-4xl bg-slate-300'>
            <div className='overflow-hidden w-full h-full rounded-[30px]'>
                <img className="" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w780/${image}`} alt="" />
            </div>
        </div>
    )
}

export default MovieImage