import React from 'react'

// - react-router
import { NavLink } from "react-router-dom";


// - components
import Icon from './icon';

// - animation
import { motion, useCycle } from 'framer-motion';

// - third-party
import clsx from 'clsx';

const navMenu = {
    open: {
        zIndex: 70,
        transition: { staggerChildren: 0.08, delay: 0.4, }
    },
    closed: {
        transition: { staggerChildren: 0.01, staggerDirection: 0 }
    }
};

const navLink = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 100, velocity: -10 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 100 }
        }
    }
};

const NavMenu = ({ name }) => {

    const menuName = {
        menu: ['Home', 'Award', 'Celebs'],
        category: ['Movies', 'Series', 'Anime',],
        general: ['Settings', 'Logout']
    }

    const ulStyle = clsx(
        `relative p-4 w-full`,
    );

    return (
        <motion.ul className={ulStyle} variants={navMenu}>
            <motion.span className=' text-gray-300 uppercase block mb-2' variants={navLink}>{name}</motion.span>
            {menuName[name].map(linkName => (
                <NavLink key={linkName} to={linkName.toLowerCase()} className={({ isActive }) => (isActive ? "bg-blue-light rounded-[10px] block" : "mp")} >
                    <motion.li className="p-3 rounded-[10px] flex gap-4" variants={navLink}>
                        <Icon name={linkName} />
                        {linkName}
                    </motion.li>
                </NavLink>
            ))
            }
            {/* 
            <motion.li variants={navLink}>Hello</motion.li>
            <motion.li variants={navLink}>Hello</motion.li> */}
        </motion.ul >
    )
}

export default NavMenu