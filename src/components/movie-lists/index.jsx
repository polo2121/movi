import React, { forwardRef, useState, useEffect } from 'react'

// - components
import Title from "./components/title/title"
import Subtitle from "./components/subtitle/subtitle"
import MovieCard from './movie-card'

// - hooks
import useScreenSize from '../../hooks/useScreenSize';


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
        <section className='mt-10 px-4 bg-slae-400 relative text-white overflow-hidden '>
            <div className=' bg-blue-dark flex flex-col gap-2 rounded-[10px] bg-cover bg-no-repeat relative px-6 py-10' style={{ backgroundImage: `url(${CinemaSVG})` }}>
                <Title> In Threater</Title >
                <Subtitle>Find out what movies <br /> are showing in threater.</Subtitle>
                <MovieCard />
            </div >
        </section >
    )
}

export default MovieList



