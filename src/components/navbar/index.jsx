import React from 'react'

// - components
import NavLink from './nav-links';

// - svgs 
import moviLogo from "../../assets/svgs/movi-logo.svg"
import useScreenSize from '../movie-lists/useScreenSize';
import { motion, useCycle } from 'framer-motion';


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 96% 96%)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(10px at 96% 96%)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const Navbar = () => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const { screenSize } = useScreenSize();
    console.log(`nav ${screenSize[0]}`)


    return (
        <>
            {screenSize[0] > 1000 ? (<nav animate={isOpen ? "open" : "closed"} className='w-[clamp(220px,16vw,240px)] h-screen fixed shadow-2xl px-4 text-[14px]'>
                <img className="p-10" src={moviLogo} alt="movi-logo" loading='lazy' />
                <NavLink name="menu" />
                <NavLink name="category" />
                <NavLink name="general" />
            </nav>) : (<nav></nav>)
            }
        </>

    )
}




export default Navbar   