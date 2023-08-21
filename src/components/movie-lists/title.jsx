import React from 'react'

// - third-party
import clsx from 'clsx'


const Title = ({ children }) => {

    const titleCss = clsx('capitalize font-bold text-[clamp(1.625rem,6.250vw-1rem,1.7rem)] px-6')

    return (
        <h3 className={titleCss}>{children}</h3>
    )
}

export default Title