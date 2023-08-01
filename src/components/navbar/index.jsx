import React, { useRef } from 'react'

// - components
import MobileNav from './mobile-nav';
import Logo from '../logo';
import Menu from './menu';
import MenuLink from './menu-link';
import Icon from './icon';
import LinkName from './link-name';

// - hooks
import useScreenSize from '../../hooks/useScreenSize';


// - third-party
import clsx from 'clsx';
import { motion, useCycle } from 'framer-motion';


const sidebar = {
    open: {
        width: "14rem",
        transition: {
            type: "spring",
            stiffness: 100,
            restDelta: 2,
        }

    },
    closed: {
        width: "0rem",

    }
};



const navToggle = {
    closed: {
        x: "-50%",
        transition: {
            type: "spring",
            stiffness: 100,
        }
    },
    open: {
        x: "13rem",
        transition: {
            type: "spring",
            stiffness: 100,
        }
    }
};

const Navbar = () => {


    const [isOpen, toggleOpen] = useCycle(true, false);

    const { screenSize } = useScreenSize();

    let renderCount = useRef(0)

    const menuLinkNames = ['home', 'awards', 'celebs']
    const categoryLinkNames = ['series', 'movies', 'anime']
    const generalLinkNames = ['settings', 'logout']

    renderCount.current += 1;

    const emptySideBar = {
        open: {
            width: "14rem",
            transition: {
                type: "spring",
                stiffness: 100,
                restDelta: 2,
            }

        },
        closed: {
            width: "0rem",
        }
    };

    const mobileEmptySideBar = {
        open: {
            display: "flex",
        },
        closed: {
            display: "none",


        }
    }

    const navCss = clsx('relative');

    const sideBarCss = clsx(
        'fixed w-56 h-screen bg-white flex flex-col gap-8 overflow-hidden z-[70] shadow-2xl shadow-slate-300',
        isOpen && "py-4 px-2",
    )

    const toggleBtnCss = clsx(
        'fixed z-[80] w-8 h-8 rounded-full top-4 bg-white shadow-xl ',
        screenSize[0] >= 1024 && "hidden"
    );

    const emptySideBarCss = clsx(
        'h-screen z-10 ',
    )

    const mobileEmptySideBarCss = clsx(
        'fixed w-full h-screen top-0 bg-slate-800 z-[50] opacity-50'
    );

    console.log(screenSize[0])
    console.log(renderCount)

    return (
        <motion.nav className={navCss} initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.div className={sideBarCss} variants={sidebar}>
                <Logo />
                <Menu name="menu" >
                    {menuLinkNames.map(link => (
                        <MenuLink key={link} route={link}>
                            <Icon icon={link} />
                            <LinkName name={link} />
                        </MenuLink>
                    ))}
                </Menu>
                <Menu name="category" >
                    {categoryLinkNames.map(link => (
                        <MenuLink key={link} route={link}>
                            <Icon icon={link} />
                            <LinkName name={link} />
                        </MenuLink>
                    ))}
                </Menu>
                <Menu name="general" >
                    {generalLinkNames.map(link => (
                        <MenuLink key={link} route={link}>
                            <Icon icon={link} />
                            <LinkName name={link} />
                        </MenuLink>
                    ))}
                </Menu>
            </motion.div >
            <motion.button className={toggleBtnCss} onClick={() => toggleOpen()} variants={navToggle}>
            </motion.button>
            {
                screenSize[0] >= 1024 ?
                    (<motion.div className={emptySideBarCss} variants={emptySideBar}></motion.div>)
                    : (<motion.nav className={mobileEmptySideBarCss} variants={mobileEmptySideBar}></motion.nav>)
            }

        </motion.nav>


    )
}




export default Navbar   