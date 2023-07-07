import React from 'react'

// - components
import NavLink from './nav-links';

// - svgs 
import moviLogo from "../../assets/svgs/movi-logo.svg"

const Navbar = () => {

    return (
        <nav className='w-[240px] h-screen fixed shadow-2xl px-4 text-[14px]'>
            <img className="p-10" src={moviLogo} alt="movi-logo" loading='lazy' />
            <NavLink name="menu" />
            <NavLink name="category" />
            <NavLink name="general" />
        </nav >
    )
}

export default Navbar