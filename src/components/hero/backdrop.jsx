import React from 'react'

// - assets 
import RoundedLineTop from "../../assets/svgs/hero-line-1.svg"
import RoundedLineBottom from "../../assets/svgs/hero-line-2.svg"


// - third-party
import clsx from 'clsx'

const Backdrop = ({ children }) => {

    const backdropCss = clsx(
        'bg-white relative flex rounded-[1.9rem] items-center h-fit',
        'md:w-full md:flex-row',
        'sm:flex-col sm:h-fit sm:px-6 sm:py-20 sm:gap-20',
    )

    return (
        <div className={backdropCss}>
            <img className="absolute left-[-0.4rem] top-[-0.3rem] " src={RoundedLineTop} alt="rounded-line-top" />
            {children}
            <img className="absolute bottom-0 right-0" src={RoundedLineBottom} alt="rounded-line-bottom" />
        </div>
    )
}

export default Backdrop