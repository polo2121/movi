import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// - components
import MenuLink from './menu-link';

// - third-party
import clsx from 'clsx';
import { motion } from 'framer-motion';


const Menu = ({ name }) => {

    const menuLinks = {
        menu: ['home', 'discover', 'celebs'],
        category: ['movies', 'tv-shows', 'anime'],
        general: ['settings', 'log out']
    }

    return (
        <div className='text-lg grid gap-2 font-bold content-start'>
            <h3 className='text-zinc-300 opacity-70 font-medium capitalize text-[clamp(1rem,9vw-1rem,1.25rem)]'>{name}</h3>
            <ul className='grid gap-2 '>
                {
                    menuLinks[name].map(link => (<MenuLink key={link} link={link} />))
                }

            </ul>
        </div>
    )
}
// transform: translate(4px, 6px);
// translate(10px, 14px);
// translate(14px, 3px);
export default Menu