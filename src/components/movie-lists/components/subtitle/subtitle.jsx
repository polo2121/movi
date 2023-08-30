import React from 'react'

// - third-party
import clsx from 'clsx'

const Subtitle = ({ children }) => {

    const subtitleCss = clsx('text-xl')

    return (
        <p className={subtitleCss}>{children}</p>
        // text-[clamp(1rem,5vw-1rem,1.125rem)]
    )
}

export default Subtitle