import React, { useState } from 'react'

// - react-router
import { Outlet } from 'react-router'

// - components
import Navbar from '../components/navbar'

const Main = () => {
    return (
        <>
            <Navbar />
            <section className='md:ml-0 lg:ml-[clamp(220px,16vw,240px)]'>
                <Outlet />
            </section>
        </>
    )
}

export default Main