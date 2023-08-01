import React from 'react'

// - components

// - third-party
import clsx from 'clsx';

const MovieCaroselCard = ({ image, title, rating, info }) => {

    const movieCaroselWrapperCss = clsx(
        ' flex justify-center',
        'md:w-1/2 md:m-auto',
        'sm:w-full'
    );

    const movieCaroselCardCss = clsx(
        'relative rounded-2xl',
        'lg:w-[clamp(340px,25vw+1rem,400px)] h-[clamp(245px,27.344vw,280px)] bg-slate400',
        'md:w-[80%]',
        'sm:w-[60%]'
    );
    //clamp(300px,22.817vw-1rem,329px)

    const movieCaroselCardBody = clsx(
        'absolute bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 right-4 w-full h-fit shadow-lg rounded-lg text-[17px] flex flex-col gap-1 cursor-pointer',
        'md:bottom-[0rem]',
        'sm:bottom-[-2rem]'
    );

    const movieCaroselCardHeader = clsx('flex justify-between items-center');

    return (
        <section className={movieCaroselWrapperCss}>
            <section className={movieCaroselCardCss}>
                <a href="" className=" h-full block relative">
                    {image}

                    <div className={movieCaroselCardBody}>
                        <div className={movieCaroselCardHeader}>
                            {title}
                            {rating}
                        </div>
                        {info}
                    </div>
                </a>
            </section >
        </section>
    )
}


export default MovieCaroselCard