import React, { useState } from 'react'

// - react-router
import { Outlet } from 'react-router'

// - components
import Navbar from '../components/navbar'

const Main = () => {
    return (
        <>
            <Navbar />
            <section className='ml-[240px]'>
                <Outlet />
            </section>
        </>
    )
}

export default Main