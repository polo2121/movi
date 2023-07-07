import React, { useEffect, useRef, useState } from 'react'

// - components
import Rating from './rating'
import MovieInfo from './movie-info'
import MovieImage from './movie-image'

// - assets
import flash from '../../assets/images/the-flash-2x.png'
import elemental from '../../assets/images/elemental.png'
import transformer from '../../assets/images/transformer.png'
import spiderVerse from '../../assets/images/spider-verse.png'
import noHardFeeling from '../../assets/images/no-hard-feeling.png'


import clsx from 'clsx';


const MovieSlide = () => {

    const [movieSlideOrder, setMovieSlideOrder] = useState(6)

    useEffect(() => {
        const interval = setInterval(() => {
            setMovieSlideOrder((order) => {
                if (order == 1)
                    return 6

                if (order >= 0 && order <= 6)
                    return order - 1


            })
        }, 6000);
        return () => clearInterval(interval);

    }, [])

    const movieSlideBase = 'absolute w-[400px] h-[329px] m-auto inset-0 transition-transform delay-200'

    const getMovieSlideStyle = (orderNum) => {

        let rotateDeg;
        if (orderNum % 2)
            rotateDeg = "rotate-[4deg]"
        else
            rotateDeg = "rotate-[-4deg]"

        let movieSlideStyle = clsx(
            movieSlideBase,
            orderNum === 6 ? "rotate-[0deg]" : movieSlideOrder > 1 && movieSlideOrder <= orderNum ? "rotate-[0deg]" : rotateDeg,
            movieSlideOrder > 1 && movieSlideOrder < orderNum && "fade-out-bck",
            movieSlideOrder === 1 && "fade-in-fwd"

        )
        return movieSlideStyle;
    }

    return (
        <>
            <div className='w-[400px] h-[329px] m-auto'>
            </div>

            <div className={getMovieSlideStyle(2)}>
                <MovieImage image={noHardFeeling} />
                <Rating />
                <MovieInfo name="no hard feeling" />
            </div >


            <div className={getMovieSlideStyle(3)}>
                <MovieImage image={flash} />
                <Rating />
                <MovieInfo name="The Flash" />
            </div >


            <div className={getMovieSlideStyle(4)}>
                <MovieImage image={transformer} />
                <Rating />
                <MovieInfo name="Transformer" />
            </div >


            <div className={getMovieSlideStyle(5)}>
                <MovieImage image={elemental} />
                <Rating />
                <MovieInfo name="Elemental" />
            </div >

            <div className={getMovieSlideStyle(6)}>
                <MovieImage image={spiderVerse} />
                <Rating />
                <MovieInfo name="Spider-Verse" />
            </div >


        </>
    )
}

export default MovieSlide