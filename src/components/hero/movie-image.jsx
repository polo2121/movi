import React from 'react'

// - assets 


const MovieImage = ({ image }) => {
    return (
        <div className='relative rounded-[30px] border-[6px] border-white w-[94%] h-full m-auto shadow-4xl'>
            <div className='overflow-hidden w-full h-full rounded-[30px]'>
                <img className="object-none object-[center_bottom]" width="100%" height="100%" src={image} alt="" />
            </div>
        </div>
    )
}

export default MovieImage