import React, { forwardRef, useState } from 'react'

// - components
import Title from "./title"

// - assets
import CinemaSVG from "../../assets/svgs/cinema.svg"
import Flash from "../../assets/images/spider-verse.png"

// - third-party
import clsx from 'clsx'
import { useRef } from 'react'
import { motion } from 'framer-motion'


const MovieList = () => {

    const mobileMovieListContainerCss = clsx();

    return (
        <section className='mt-10 px-6 bg-slate-400 relative text-white overflow-hidden h-[30%]'>
            <div className=' bg-blue-dark px-6 pt-8 flex flex-col gap-2 h-[60%] rounded-[10px] bg-contain bg-no-repeat' style={{ backgroundImage: `url(${CinemaSVG})` }}>
                <Title>In Threater</Title>
                {/* <Title />
                <Subtitle />
                <MovieCard /> */}
            </div>

        </section>
    )
}

export default MovieList



