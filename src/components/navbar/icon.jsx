import React from 'react'

// - svgs 
import anime from "../../assets/svgs/nav-icons/anime.svg"
import celebs from "../../assets/svgs/nav-icons/celebs.svg"
import discover from "../../assets/svgs/nav-icons/discover.svg"
import home from "../../assets/svgs/nav-icons/home.svg"
import logout from "../../assets/svgs/nav-icons/logout.svg"
import movies from "../../assets/svgs/nav-icons/movies.svg"
import person from "../../assets/svgs/nav-icons/person.svg"
import settings from "../../assets/svgs/nav-icons/setting.svg"
import awards from "../../assets/svgs/nav-icons/award.svg"
import series from "../../assets/svgs/nav-icons/tv-shows.svg"

// - third-party
import { motion } from 'framer-motion';

const iconsAnimate = {
    closed: {
        y: "130%",
    },
    open: {
        y: "0%",
        transition: {
            type: "spring",
            y: { duration: 0.6, delay: 0.18 }
        }
    }
};

const Icon = ({ icon }) => {
    const iconNames = { anime, celebs, discover, home, logout, movies, person, settings, awards, series }
    return (
        <motion.img src={iconNames[icon]} alt={iconNames[icon]} variants={iconsAnimate} />
    )
}

export default Icon