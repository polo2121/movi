import React from 'react'
import { NavLink } from 'react-router-dom'


const SocialMedia = ({ name }) => {
    return (
        <NavLink className="">
            <div className='h-12 w-12 rounded-full bg-white overflow-hidden flex justify-center items-center shadow-lg'>
                <img width="70%" src={name} alt="social media" loading='lazy' />
            </div>
        </NavLink>
    )
}

export default SocialMedia