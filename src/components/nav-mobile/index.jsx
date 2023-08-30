import React from 'react'

// - components
import Menu from './menu'

// - third-party
import clsx from 'clsx';
import { motion, useCycle, AnimatePresence } from 'framer-motion';


const mobileNav = {
    open: { display: "block" },
    closed: { display: "none", transition: { delay: 0.2 } }
};

const menu = {
    open: { height: "14rem", opacity: 1, transition: { type: "spring", stiffness: 150 } },
    closed: { height: "0rem", opacity: 0 }
}

const MobileNav = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const menuNames = ['menu', 'category', 'general']

    const menuCss = clsx('w-4 h-4', isOpen && "hidden");
    const closeCss = clsx('w-4 h-4', !isOpen && "hidden");

    return (
        <>
            <button className='fixed z-[101] bottom-2 right-4 mb-2 w-14 h-14 rounded-full bg-blue-light shadow-lg flex justify-center items-center' onClick={() => toggleOpen()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={menuCss}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={closeCss}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
            <AnimatePresence>
                <motion.nav className='fixed w-full h-screen z-[100] flex-col justify-end' animate={isOpen ? "open" : "closed"} variants={mobileNav}>
                    <motion.div className='bg-zinc-800 h-screen opacity-50'  ></motion.div>
                    <motion.section className='grid grid-cols-3 p-8 bg-white absolute bottom-0 inset-x-0' variants={menu}>
                        {
                            menuNames.map(menu => (<Menu key={menu} name={menu} />))
                        }
                    </motion.section>
                    {/* <button className='bg-purple-100'>Hello</button> */}
                </motion.nav >
            </AnimatePresence>

        </>

    )
}

export default MobileNav