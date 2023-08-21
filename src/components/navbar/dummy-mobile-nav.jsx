import React from 'react'

// - assets
import moviLogo from "../../assets/svgs/logo.svg"


// - components
import Backdrop from './backdrop';
import NavToggle from './nav-toggle';
import NavMenu from './nav-menu';

// - animation
import { motion, useCycle } from 'framer-motion';

const variants = {
    closed: {
        zIndex: 40,
        opacity: 0,
        width: "0%",
        transition: {
            delay: 0.8,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    open: {
        zIndex: 60,
        opacity: 1,
        width: "30%",
    }
}

const logoVariants = {
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
}

const MobileNav = () => {

    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav animate={isOpen ? "open" : "closed"}>
            <NavToggle onToggle={() => toggleOpen()} />

            <motion.div className="fixed h-screen overflow-hidden right-0" variants={variants}>
                <Backdrop />
                <motion.img className="p-10 absolute" width="80%" src={moviLogo} alt="movi-logo" loading='lazy' variants={logoVariants} />
                <div className="mt-24">
                    <NavMenu name="menu" />
                    <NavMenu name="category" />
                    <NavMenu name="general" />
                </div>
            </motion.div>
        </motion.nav >
    )
}

export default MobileNav