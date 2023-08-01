import React, { useEffect, useState } from 'react'

// - hooks
import useScreenSize from '../../hooks/useScreenSize';

// - third-party
import { motion } from 'framer-motion';
import clsx from 'clsx';


const MovieCard = ({ name, imagePath, releaseDate }) => {

    const { screenSize } = useScreenSize();
    const [itemPerScreen, setItemPerScreen] = useState(0);

    let movieCardCss = clsx(
        'w-[10%] p-2',
        screenSize[0] <= 1600 && screenSize[0] >= 1040 && "flex-5",
        screenSize[0] <= 1385 && screenSize[0] >= 700 && "flex-4",
        screenSize[0] <= 700 && screenSize[0] >= 600 && "flex-3",
    );

    let movieCardInfoCss = clsx(
        'absolute w-full bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 inset-x-0 shadow-lg text-[17px] flex flex-col gap-1 cursor-pointer rounded-md',
        screenSize[0] <= 1360 && screenSize[0] >= 1040 && "hidden",
        screenSize[0] <= 900 && "hidden",
    );

    // useEffect(() => {
    //     console.log(screenSize[0])
    //     if (screenSize[0] > 1300) {

    //     }


    //     if (screenSize[0] > 900)
    //         setItemPerScreen(4)

    // }, [screenSize[0]])


    // src={`https://image.tmdb.org/t/p/w500/${imagePath}`} 
    return (

        <motion.a href="#ss" className={movieCardCss} whileTap={{ scale: 0.9 }} >
            <div className='w-full h-full overflow-hidden rounded-[16px] relative'>
                <motion.img whileHover={{ scale: 1.1, filter: "brightness(50%)" }} transition={{ ease: "easeIn", duration: 0.2 }} className="rounded-[16px] w-full h-full" src={`https://image.tmdb.org/t/p/w342/${imagePath}`} alt="movie" />

                <div className={movieCardInfoCss}>
                    <h6 className='text-[14px] capitalize font-bold line-clamp-1 w-full'>{name}</h6>
                    <span className='font-normal opacity-50 text-[14px]'>{releaseDate}</span>
                </div>
            </div>


        </motion.a>
    )
}
export default MovieCard