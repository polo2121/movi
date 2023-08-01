import React from 'react'

// - third-party 
import clsx from 'clsx'
import { motion } from 'framer-motion'


const MovieCaroselImage = ({ image }) => {
    const movieImageCss = clsx('object-cover rounded-lg h-[100%] bg-slate-400')
    return (
        <figure className='overflow-hidden rounded-lg shadow-2xl h-full'>
            <img className={movieImageCss} src='https://image.tmdb.org/t/p/w780/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg' alt="movie backdrop" />
        </figure>

    )
}

export default MovieCaroselImage