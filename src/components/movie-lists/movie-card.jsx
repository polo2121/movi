import React, { useState, useRef } from 'react'


// - components
import Control from "./control"

// - assets
import CinemaSVG from "../../assets/svgs/cinema.svg"
import Flash from "../../assets/images/spider-verse.png"
import Spider from "../../assets/images/the-flash-2x.png"

// - third-party
import clsx from 'clsx'
import { motion } from 'framer-motion';


const MovieCard = () => {
    const movieCardCss = clsx();

    const [moveValue, setMoveValue] = useState("-0%");

    const movieListWrapperRef = useRef();

    console.log(moveValue)
    return <>
        <section ref={movieListWrapperRef} className='bg-purple-400 w-full flex pl-6'>
            <motion.div animate={{ x: moveValue, transition: { type: "spring", stiffness: 100 } }} className='w-full h-fit gap-3  mt-4  bg-slate-800 flex flex-1' >

                <div className='flex flex-3'>
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />

                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />


                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />


                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />
                    <img width="" className='p-1' src={Flash} alt="" />




                </div>



            </motion.div>

        </section >
        <Control moveValue={moveValue} setMoveValue={setMoveValue} ref={movieListWrapperRef} />

    </>
}

export default MovieCard;