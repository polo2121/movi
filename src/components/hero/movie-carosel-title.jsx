import React from 'react'

// - third-party
import clsx from 'clsx'

const MovieCaroselTitle = ({ movieTitle }) => {

    const titleCss = clsx("text-[17px] font-bold text-blue-dark");
    return (
        <h3 className={titleCss}>{movieTitle}</h3>

    )
}

export default MovieCaroselTitle