import React, { useCallback, useEffect, useState } from 'react'

// - third-party
import clsx from 'clsx'
import { motion } from 'framer-motion';


const MovieCarosel = () => {

    const [slideAnimationFrame, setSlideAnimationFrame] = useState([{ x: 0, y: 0, z: 0 }, { x: "-35%", y: 0, z: "-120px" }, { x: "35%", y: 0, z: "-120px" }]);

    const [currentValue, setCurrentValue] = useState(0);

    // useEffect(() => {
    //     console.log("Effect In")
    //     const timer = setTimeout(() => {
    //         console.log(slideAnimationFrame)
    //         handleAnimation([...slideAnimationFrame])



    //         // changeAnimation(...slideAnimation)
    //     }, 5000);
    //     return () => clearTimeout(timer);
    // }, [slideAnimationFrame])

    // const handleAnimation = useCallback(function changeAnimation(keyFrame) {
    //     const firstKeyFrame = keyFrame.shift();
    //     keyFrame.push(firstKeyFrame);
    //     setSlideAnimationFrame(keyFrame)
    //     setCurrentValue((prev) => {
    //         if (prev === 2)
    //             return 0
    //         if (prev !== 2)
    //             return prev + 1
    //     })
    //     // return keyFrame;
    // }, [])

    const peopleFavouriteWrapperCss = clsx('mt-10 px-6')
    const titleCss = clsx('capitalize text-2xl font-bold text-[clamp(1.625rem,6.250vw-1rem,1.75rem)]')
    const movieCaroselContainerCss = clsx('relative w-full h-fit overflow-hidden')
    const movieCaroselWrapperCss = clsx('w-full h-fit mt-10')
    const movieCaroselCardCss = clsx('w-[80%] absolute m-auto left-0 right-0 top-0')


    return (
        <section className={peopleFavouriteWrapperCss}>
            <h5 className={titleCss}>People Favourite</h5>
            <section className={movieCaroselContainerCss} style={{ transformStyle: 'preserve-3d' }}>
                <div className={movieCaroselWrapperCss} style={{ transformStyle: 'preserve-3d', perspective: '1000px', }}>
                    <img className="opacity-0" width="80%" src="https://image.tmdb.org/t/p/w780/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg" alt="" />

                    <motion.div className={movieCaroselCardCss} transition={{ type: "spring", stiffness: 100 }}>
                        <img src="https://image.tmdb.org/t/p/w780/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg" alt="" />
                    </motion.div>

                </div>
            </section>
            <section className='mt-4 flex overflow-hidden' style={{ transformStyle: 'preserve-3d', perspective: '1000px', }}>
                <motion.div animate className='flex w-full' style={{ transformStyle: 'preserve-3d' }}>
                    <motion.div className='w-full border-2 border-blue-normal p-6 rounded-lg flex flex-col gap-2 flex-1'>
                        <h3 className='text-lg font-bold'>The Flash 2023</h3>
                        <span className='text-base opacity-40'>Action/Horror</span>
                        <p className='opacity-90'>Worlds collide when the Flash uses his superpowers to travel back in time to change the events of the past...</p>
                    </motion.div>

                </motion.div>

            </section>
            <section className='mt-4 bg-slate00 flex justify-center items-center gap-2 w-full'>
                <span className={`w-2 h-2 bg-slate-200 rounded-full block ${currentValue === 0 && 'bg-blue-normal'}`}></span>
                <span className={`w-2 h-2 bg-slate-200 rounded-full block ${currentValue === 1 && 'bg-blue-normal'}`}></span>
                <span className={`w-2 h-2 bg-slate-200 rounded-full block ${currentValue === 2 && 'bg-blue-normal'}`}></span>

            </section>
        </section >
    )
}

export default MovieCarosel