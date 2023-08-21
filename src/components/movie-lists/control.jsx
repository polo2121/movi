import React, { forwardRef, useCallback, useState } from 'react'

// - components
import NextButton from './next-button';
import PreviousButton from './previous-button'

// - hooks
import useScreenSize from '../../hooks/useScreenSize';

// - third-party
import clsx from 'clsx'
import { useEffect } from 'react';

const Control = forwardRef(function Control({ moveValue, setMoveValue }, ref) {

    const [xValue, setXValue] = useState(0);
    const [limitValue, setLimitValue] = useState(0)


    const movieListWrapperRef = ref;



    console.log(xValue)
    const handleNext = () => {
        setMoveValue((prev) => {

            return prev - xValue;
        })

    }

    const handlePrev = () => {
        setMoveValue((prev) => {
            return prev + xValue
        })

    }
    const controlCss = clsx();
    return <section className='flex gap-4 justify-end mt-4'>
        <PreviousButton onPrev={handlePrev} moveValue={moveValue} />

        <NextButton onNext={handleNext} limit={limitValue} moveValue={moveValue} />
        {/* <button onClick={handleNext} className='w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg shadow-zinc-300'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
        </button> */}
    </section>
})

export default Control