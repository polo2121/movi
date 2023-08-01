import React from 'react'

// - router
import { NavLink } from 'react-router-dom';

// - assets
import HomeIcon from "../../assets/svgs/nav-icons/home.svg"

// - third-party
import clsx from 'clsx';
import { motion } from 'framer-motion';

const menu = {
    open: {
        width: "100%",
        transition: {
            type: "spring",
            stiffness: 100,
            restDelta: 2,
        }

    },
    closed: {
        width: "0%",
        // transition: {
        //     delay: 0.5,

        // }
    }
};



const MenuLink = ({ route, children }) => {

    const menuLinkWrapperCss = clsx('flex flex-col gap-2')

    const menuLinkCss = (isActive) => {

        return clsx(
            'rounded-lg cursor-pointer overflow-hidden relative',
            'hover:bg-blue-light',
            '',
            isActive && 'bg-blue-light'
        );

    }



    return (

        <motion.ul className={menuLinkWrapperCss} variants={menu}>

            <NavLink to={route} className={({ isActive }) => menuLinkCss(isActive)}>

                <button className='w-full flex gap-4 items-center overflow-hidden px-6 py-2'>
                    {children}
                </button>



            </NavLink>

        </motion.ul>
    )
}

export default MenuLink