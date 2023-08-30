import React, { useState } from 'react'

// - hooks
import useScreenSize from '../../../../hooks/useScreenSize';

// - third-party
import clsx from 'clsx'
import { useEffect } from 'react';

const Control = ({ children }) => {

    const controlCss = clsx();

    return (
        <section className='flex gap-4 justify-end text-blue-dark mt-8'>
            {children}
        </section>
    )
}

export default Control