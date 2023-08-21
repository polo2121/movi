import React from 'react'

// - third-party
import clsx from 'clsx'

const Breadcrumb = ({ title }) => {

    const breadcrumbCss = clsx('uppercase text-[clamp(1.25rem,6.250vw-1rem,1.5rem)] md:text-[22px] font-bold');

    return (
        <h5 className={breadcrumbCss}>{title}</h5>
    )
}

export default Breadcrumb