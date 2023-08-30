import React, { useState } from 'react'

// - animation
import { motion } from 'framer-motion'

// - third-party
import clsx from 'clsx'

const NextButton = ({ onNext, itemPerScreen, moveSlide }) => {


    const slideLimit = Math.floor(20 / itemPerScreen);

    console.log(slideLimit, Math.abs(moveSlide))

    const checkDisableStatus = () => {
        return Math.abs(moveSlide) >= slideLimit ? true : false
    }

    const nextStyle = clsx('flex w-[50px] h-[50px] rounded-full items-center relative justify-center shadow-lg transition bg-white after:duration-200 after:ease-out after:hover:ease-in after:w-4 after:h-4 after:bg-blue-light after:absolute after:z-20 after:bottom-[0px] after:right-0 after:hover:w-full after:hover:h-full after:rounded-full  after:scale-0 after:hover:scale-[4] overflow-hidden', Math.abs(moveSlide) >= slideLimit && 'opacity-0')

    return (

        < motion.button whileTap={{ scale: 0.8 }
        } whileHover={{ scale: 1.4 }} className={nextStyle} onClick={onNext} disabled={checkDisableStatus()}>

            <svg className="relative w-5 h-5 z-40 shadow-xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </ motion.button>
    )
}

export default NextButton