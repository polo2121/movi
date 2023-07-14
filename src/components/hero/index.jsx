import React, { useEffect, useRef, useState } from 'react'

// - components
import TitleBar from '../../components/title-bar'
import MovieSlide from './movie-slide'

const Hero = () => {


    return (
        <div className=' bg-blue-light w-full h-fit px-10 py-[4%] mb-20'>
            <TitleBar />
            <div className='bg-white mt-10 lg:grid lg:grid-cols-2 m-auto px-[4%] py-[6%] rounded-[30px] font-bold relative'>

                <svg className="absolute left-[-5px] top-[-5px]" width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5126 50.9279C3.90694 31.815 16.6848 -4.34809 56.6417 3.90355" stroke="#537FE7" strokeWidth="4" />
                </svg>

                <svg className="absolute bottom-0 right-0" width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.3306 2.02002C46.3306 18.6867 42.4306 51.92 2.83057 51.52" stroke="#537FE7" strokeWidth="4" strokeLinecap="round" />
                </svg>


                <div className='relative flex items-center '>
                    <div className='absolute z-10 top[10%] left-6'>
                        <svg className='h-[275px]' viewBox="0 0 416 275" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10V264.361C0 270.127 4.86346 274.699 10.6186 274.342L406.619 249.8C411.891 249.473 416 245.102 416 239.819V10C416 4.47715 411.523 0 406 0H10C4.47715 0 0 4.47716 0 10Z" fill="#E5E9F4" fillOpacity="0.5" />
                        </svg>
                    </div>

                    <h3 className='relative z-20 text-[clamp(1.75rem,1.2vw+1rem,2.188rem)]'>
                        Immerse Yourself <br />
                        In The Fascinating <br />
                        World of Movie Wonders
                    </h3>

                </div>
                <div className='relative'>
                    <MovieSlide />
                </div>

            </div>
        </div>
    )
}

export default Hero