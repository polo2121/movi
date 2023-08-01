import React from 'react'

// - router
import { NavLink } from 'react-router-dom';

// - assets
import moviLogo from "../../assets/svgs/logo.svg"

// - third-party
import clsx from 'clsx';

const Logo = () => {

    const logoCss = clsx('mx-auto mt-10')

    return (

        <NavLink className={logoCss}>
            <img width="" className='' src={moviLogo} alt="movi logo" />
        </NavLink>


    )
}

export default Logo