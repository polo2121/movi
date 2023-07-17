import React, { useEffect, useRef } from 'react'

// - third-party
import { motion } from 'framer-motion';


const MovieCard = ({ name, imagePath, releaseDate }) => {


    // src={`https://image.tmdb.org/t/p/w500/${imagePath}`} 
    return (

        <motion.a href="#ss" className='md:flex-4 lg:flex-5 p-2' whileTap={{ scale: 0.9 }} >
            <div className='w-full h-full overflow-hidden rounded-[16px] relative'>
                <motion.img whileHover={{ scale: 1.1, filter: "brightness(50%)" }} transition={{ ease: "easeIn", duration: 0.2 }} className="rounded-[16px] w-full h-full p-2" src={`https://image.tmdb.org/t/p/w342/${imagePath}`} alt="movie" />

                <div className='absolute w-full bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 inset-x-0 shadow-lg text-[17px] flex flex-col gap-1 cursor-pointer rounded-md'>
                    <h6 className='text-[14px] capitalize font-bold line-clamp-1 w-full'>{name}</h6>
                    <span className='font-normal opacity-50 text-[14px]'>{releaseDate}</span>
                </div>
            </div>


        </motion.a>
    )
}
export default MovieCard