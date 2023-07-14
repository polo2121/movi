import React from 'react'

// - react-router
import { Link, NavLink } from "react-router-dom";

// - components
import Icon from './icon';

const NavLinks = ({ name, subLink }) => {

    const subLinks = {
        menu: ['Home', 'Award', 'Celebs'],
        category: ['Movies', 'Series', 'Anime'],
        general: ['Settings', 'Logout']
    }

    return (
        <ul className='text-[17px] flex flex-col gap-1 capitalize mb-4'>
            <span className='px-10 text-gray-300 uppercase'>{name}</span>

            {subLinks[name].map(link => (
                <NavLink key={link} to={link.toLowerCase()} className={({ isActive }) => (isActive ? "bg-blue-light rounded-[10px]" : null)} >
                    <li className='pl-10 py-2 rounded-[10px] flex gap-3 hover:bg-blue-light hover:py-2 transition ease-in'>
                        <Icon name={link} />
                        {link}
                    </li>
                </NavLink>
            ))}
        </ul>
    )
}

export default NavLinks