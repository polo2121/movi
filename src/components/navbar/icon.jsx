import React from 'react'

// - svgs 
import Anime from "../../assets/svgs/nav-icons/anime.svg"
import Celebs from "../../assets/svgs/nav-icons/celebs.svg"
import Discover from "../../assets/svgs/nav-icons/discover.svg"
import Home from "../../assets/svgs/nav-icons/home.svg"
import Logout from "../../assets/svgs/nav-icons/logout.svg"
import Movies from "../../assets/svgs/nav-icons/movies.svg"
import Person from "../../assets/svgs/nav-icons/person.svg"
import Settings from "../../assets/svgs/nav-icons/setting.svg"
import Award from "../../assets/svgs/nav-icons/award.svg"
import Series from "../../assets/svgs/nav-icons/tv-shows.svg"



const Icon = ({ name }) => {
    const iconNames = { Anime, Celebs, Discover, Home, Logout, Movies, Person, Settings, Award, Series }
    return (
        <img src={iconNames[name]} alt="nav-icon" loading='lazy' />
    )
}

export default Icon