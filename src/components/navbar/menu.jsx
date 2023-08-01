import React from 'react'

// - third-party
import clsx from 'clsx';

const Menu = ({ name, children }) => {

    const menuWrapperCss = clsx('flex flex-col gap-2');

    const menuNameCss = clsx('uppercase px-6 text-base opacity-25')

    return (
        <div className={menuWrapperCss}>
            <label className={menuNameCss}>{name}</label>
            {children}
        </div>
    )
}

export default Menu