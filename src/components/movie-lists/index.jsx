import React, { forwardRef, useState } from 'react'

// - components
import Title from "./title"
import Subtitle from "./subtitle"
import MovieCard from './movie-card'


// - assets
import CinemaSVG from "../../assets/svgs/cinema.svg"
import Flash from "../../assets/images/spider-verse.png"

// - third-party
import clsx from 'clsx'
import { useRef } from 'react'
import { motion } from 'framer-motion'


const MovieList = () => {

    const mobileMovieListContainerCss = clsx();

    const { screenSize } = useScreenSize();
    const broswerWidth = screenSize[0]

    useEffect(() => {
    }, [broswerWidth])

    // const calculateX = useCallback((itemsPerScreen, gap) => {
    //     return (116 * itemsPerScreen) + gap
    // }, [])

    return (
        <section className='mt-10 px-6 bg-slate-400 relative text-white overflow-hidden h-[20%]'>
            <div className=' bg-blue-dark pt-8 flex flex-col gap-2 h-[60%] rounded-[10px] bg-contain bg-no-repeat' style={{ backgroundImage: `url(${CinemaSVG})` }}>
                <Title>In Threater</Title>
                <Subtitle>Find out what movies <br /> are showing in threater.</Subtitle>
                <MovieCard />
                {/* <Title />
                <Subtitle />
                <MovieCard /> */}
            </div>

        </section>
    )
}

export default MovieList



