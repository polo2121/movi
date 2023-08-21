import React from 'react'

// - assets
import textBlockSvg from "../../assets/svgs/hero-block.svg"

// - third-party
import clsx from 'clsx'

const Text = () => {

    const heroTextSectionCss = clsx(
        'flex justify-center items-center bg-slat-400 relative',
        'lg:w-1/2',
        'md:w-1/2',
        'sm:w-full'

    );

    const heroTextWrapperCss = clsx(
        'bg-slae-400 flex justify-center px-2',
        'lg:w-full',
        'md:w-full',
        'sm:m-auto'
    )

    const heroTextCss = clsx(
        'relative z-20 bg-slat-400 w-fit  font-bold text-blue-dark text-[clamp(1.25rem,7.500vw-1rem,2rem)]',
        'lg:text-[clamp(1.6rem,3.439vw-1rem,2.2rem)] lg:px-0',
        "md:text-[clamp(25px,4.688vw-1rem,32px)] md:",
        'sm:text-[clamp(25px,7.5vw-1rem,32px)] '

    )

    const heroTextBlockCss = clsx(
        'absolute inset-y-0 m-auto z-0 left w-[90%]',
        'lg:w-[clamp(300px,28.704vw-1rem,418px)] lg:left-[0rem]',
        false && 'md:left-[clamp(4rem,8vw-1rem,6rem)]',
        'md:w-[clamp(200px,34.766vw-1rem,340px)] md:inset-x-0 md:block',
        'sm:hidden'
    )

    return (
        <section className={heroTextSectionCss}>
            <div className={heroTextWrapperCss}>
                <h2 className={heroTextCss}>
                    Immerse Yourself <br /> In The Fascinating <br /> World of Movie Wonders
                </h2>
                <img className={heroTextBlockCss} src={textBlockSvg} alt="text-block-svg" />
            </div>
        </section>
    )
}

export default Text