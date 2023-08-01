import React from 'react'

// - third-party
import clsx from 'clsx';
import { motion } from 'framer-motion';

const routeLink = {
    closed: {
        y: "80%",

    },
    open: {
        y: "0%",
        transition: {
            type: "spring",
            y: { duration: 0.6, delay: 0.18 }
        }
    }
};

const LinkName = ({ name }) => {
    const menuLinkNameCss = clsx('capitalize text-base')

    return (
        <motion.li className={menuLinkNameCss} variants={routeLink}>{name}</motion.li>
    )
}

export default LinkName