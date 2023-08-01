import React from 'react'

// - animation
import { motion, useCycle } from 'framer-motion';

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);


const NavToggle = ({ onToggle }) => {
    return (
        <button className='fixed bottom-10 right-10 z-[90] bg-blue-light w-[50px] h-[50px] flex justify-center items-center rounded-full' onClick={onToggle}>
            <svg width="18" height="18" viewBox="0 0 18 18">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    )
}

export default NavToggle