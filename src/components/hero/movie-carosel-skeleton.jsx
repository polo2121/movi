import React from 'react'

// - third-party
import clsx from 'clsx'


const MovieCaroselSkeleton = () => {

    const movieCaroselCardCss = clsx(
        'm-auto bg-slat-900 border-4 border-white rounded-2xl shadow-2xl shadow-slate-300 relative overflow-hidden',
        'lg:w-[clamp(340px,25vw+1rem,400px)] lg:h-[clamp(300px,22.817vw-1rem,329px)]',
        'md:w-[330px] md:h-[260px]'
    );
    //w-290

    return (
        <section className={movieCaroselCardCss}>
            <img className="object-fill" src='https://image.tmdb.org/t/p/w780/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg' alt="movie backdrop" />

            <div className='absolute bg-movieSlideInfoBg z-30 backdrop-blur-md px-6 py-3 bottom-0 w-full shadow-lg rounded-lg text-[17px] flex flex-col gap-1 cursor-pointer'>

                <div className='flex justify-between items-center'>
                    <h3 className='text-[17px] font-bold'>Transormer</h3>

                    <div className='flex items-center gap-1'>
                        <svg width="15" height="15" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.92397 0.936555C4.10556 0.354482 4.89428 0.354482 5.07527 0.936555L5.72295 3.0171C5.76252 3.14381 5.83945 3.25422 5.94272 3.33254C6.046 3.41086 6.17035 3.45309 6.298 3.45318H8.39359C8.98013 3.45318 9.22347 4.23687 8.74951 4.59711L7.05464 5.8826C6.95115 5.96098 6.87409 6.07157 6.83451 6.1985C6.79492 6.32544 6.79485 6.4622 6.8343 6.58917L7.48199 8.66972C7.66358 9.2518 7.02498 9.73654 6.54981 9.3763L4.85494 8.09081C4.75155 8.01244 4.62707 7.97024 4.49932 7.97024C4.37156 7.97024 4.24708 8.01244 4.1437 8.09081L2.44883 9.3763C1.97426 9.73654 1.33626 9.2518 1.51725 8.66972L2.16494 6.58917C2.20439 6.4622 2.20432 6.32544 2.16473 6.1985C2.12515 6.07157 2.04809 5.96098 1.9446 5.8826L0.250337 4.59774C-0.223621 4.2375 0.0203191 3.45382 0.60626 3.45382H2.70124C2.82899 3.45385 2.95348 3.41169 3.05688 3.33336C3.16028 3.25502 3.23729 3.14455 3.27689 3.01773L3.92457 0.937187L3.92397 0.936555Z" fill="#FFC93E" />
                        </svg>

                        <h6 className='text-[14px]'>4.5/5</h6>
                    </div>
                </div>
                <span className='text-[14px] opacity-50'>2023</span>
                <p className='text-[14px] line-clamp-2'>
                    Worlds collide when the Flash uses his superpowers
                    to travel  back in time to change the events of the past...
                </p>

            </div>
        </section >

    )
}

export default MovieCaroselSkeleton