import React from 'react'

import { NavLink } from 'react-router-dom'

const MovieLink = ({ movie }) => {
    return (
        <NavLink to="/movie_id" href="" className='flex flex-1 flex-col relative'>
            <div className={movieCardCss}>
                <div className=" opacity-5  relative z-10 before:content-[''] before:block before:w-full before:h-full before:bg-zinc-300 before:absolute before:-inset-0 before:z-20 before:rounded-lg">
                    <img width="100%" className="opacity-1 bg-zinc-300 relative z-10" src={LoadingImage} alt="" />
                </div>
            </div>
            <picture className={movieCardSkeletonCss}>
                <source media="(min-width: 799px)" srcSet={`https://www.themoviedb.org/t/p/w185/${movie.poster_path}`} />
                <img width="100%" className="rounded-lg" src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />
            </picture>
        </NavLink>
    )
}

export default MovieLink