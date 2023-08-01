import React, { useEffect, useRef, useState } from 'react'

// - components
import Backdrop from './backdrop'
import Text from '../../components/hero/text'
import MovieCarsoel from './movie-carosel'

// - third-party
import clsx from 'clsx'

const Hero = () => {

    const heroCss = clsx('w-full h-screen bg-blue-light py-4 px-6 overflow-hidden')
    return (
        <>
            <section className={heroCss}>
                <Hero.Backdrop>
                    <Hero.Text />
                    <Hero.MovieCarsoel />
                </Hero.Backdrop>
            </section>
        </>
    )
}

Hero.Backdrop = Backdrop;
Hero.Text = Text;
Hero.MovieCarsoel = MovieCarsoel;



export default Hero