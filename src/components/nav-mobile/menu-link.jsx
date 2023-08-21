import React, { useCallback } from 'react'

import { useState } from 'react';
import { NavLink } from 'react-router-dom';


// - third-party
import clsx from 'clsx';
import { motion } from 'framer-motion';

const activeSVGAni = {
    active: {
        top: -4, right: -10, opacity: 1
    },
    inactive: { top: 0, right: 0, opacity: 0 }
}
const smallCircleAni = {
    active: { x: "4px", y: "2px", opacity: 1, transition: { delay: 0.4 } },
    inactive: { x: "4px", y: "-4px", opacity: 0 }
}
const mediumCircleAni = {
    active: { x: "-1px", y: 0, opacity: 1, transition: { delay: 0.2 } },
    inactive: { x: 0, y: 0, opacity: 0 }
}

const bigCircleAni = {
    active: { x: "4px", y: "-4px", opacity: 1 },
    inactive: { x: 0, y: 0, opacity: 0 }
}

const MenuLink = ({ link }) => {
    const menuLinkCss = clsx('w-fit relative capitalize hover:text-blue-normal')
    return (
        <NavLink to={`/${link}`} key={link} className={menuLinkCss}>
            {({ isActive }) => <SubLink link={link} isActive={isActive} />}
        </NavLink>
    )
}

export default MenuLink

const SubLink = ({ link, isActive }) => {

    const subLinkCss = clsx('relative text-[clamp(0.875rem,9vw-1rem,1.25rem)]', isActive && "text-blue-normal");


    return <motion.li className={subLinkCss} animate={isActive ? "active" : "inactive"} whileHover={!isActive ? 'active' : "inactive"} exit={'inactive'}>
        {link}
        <motion.svg className="absolute z-10" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" variants={activeSVGAni}>
            <rect width="14" height="14" fill="transparent" />
            <motion.circle className='' cx="6.5" cy="6.5" r="1.5" fill="#537FE7" variants={mediumCircleAni} />
            < motion.circle className='' cx="7" cy="7" r="2" fill="#537FE7" variants={smallCircleAni} />
            <motion.circle className='' cx="6.5" cy="6.5" r="2.5" fill="#537FE7" variants={bigCircleAni} />
        </motion.svg>
    </motion.li>
}