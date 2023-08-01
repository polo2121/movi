import React from 'react'


// - animation
import { motion, useCycle } from 'framer-motion';

const Backdrop = () => {
    return (
        <motion.div className='w-[50px] h-[50px] rounded-full bg-white absolute bottom-10 right-10' variants={{
            closed: {
                scale: 0,
                transition: {
                    ease: "easeOut",
                    duration: 0.5,
                }

            },
            open: {
                scale: 40,
                transition: {
                    ease: "easeIn",
                    duration: 0.3,
                }
            },

        }}>

        </motion.div>
    )
}

export default Backdrop