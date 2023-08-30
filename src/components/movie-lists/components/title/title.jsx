import React from 'react'

// - third-party
import clsx from 'clsx'


const Title = ({ children }) => {

    const titleCss = clsx('capitalize font-bold text-3xl')

    return (
        <h3 className={titleCss}>{children}</h3>
    )
}

export default Title