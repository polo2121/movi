import React from 'react'

// - third-party
import clsx from 'clsx'

const Breadcrumb = ({ title }) => {

    const breadcrumbCss = clsx('uppercase text-[20px] md:text-[22px] font-bold');

    return (
        <h5 className={breadcrumbCss}>{title}</h5>
    )
}

export default Breadcrumb