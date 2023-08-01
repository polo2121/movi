import React, { useState } from 'react'

// - react-router
import { Outlet } from 'react-router'

// - components
import Navbar from '../components/navbar'

const Main = () => {
    return (
        <div className='flex'>
            <Navbar />
            <section className='w-full'>
                <Outlet />
            </section>
        </div>
    )
}

export default Main