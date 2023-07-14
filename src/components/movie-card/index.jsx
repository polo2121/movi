import React from 'react'

// - third-party
import { motion } from 'framer-motion';


const MovieCard = ({ name, imagePath, releaseDate }) => {

    return (
        <motion.a href="" whileHover={{ scale: 1 }}>
            <motion.div className='relative w-[205px] h-[307px] rounded-[0px] bg--700 min-w-[205px] '>
                <div className='w-[90%] h-full m-auto'>
                    <div className='w-full bg--400 h-full overflow-hidden rounded-[16px]'>
                        <motion.img whileHover={{ scale: 1.5, opacity: 0.9 }} transition={{ ease: "easeIn", duration: 0.2 }} className="rounded-[16px] w-full h-full" src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt="movie" />
                    </div>
                </div>

                <div className='absolute bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 w-full shadow-lg text-[17px] flex flex-col gap-1 cursor-pointer rounded-md'>
                    <h6 className='text-[14px] capitalize font-bold line-clamp-1 w-full'>{name}</h6>
                    <span className='font-normal opacity-50 text-[14px]'>{releaseDate}</span>
                </div>
            </motion.div>
        </motion.a>

    )
}
export default MovieCard