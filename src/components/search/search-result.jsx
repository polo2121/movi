import React from 'react'

// - animation
import { motion, AnimatePresence } from 'framer-motion'

const SearchResult = ({ queryResults, query, foundResult, isFocus }) => {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
        exit: { y: 10, opacity: 0 }
    }

    return (

        <div className='relative'>
            {

            }
            {/* <p>{queryResults ? "yes its true" : "its false"}</p> */}
            <AnimatePresence>
                {
                    foundResult > 0 && isFocus && (
                        <motion.div
                            key="results"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                            className='w-full h-fit bg-white mt-1 rounded-2xl overflow-hidden absolute z-40'
                        >
                            {
                                queryResults.length > 0 && (queryResults.map(result => {

                                    const movieTitle = !result.title ? result.name : result.title;
                                    return <motion.a
                                        key={result.id}
                                        href=""
                                        className='px-5 py-2 flex items-center hover:bg-slate-100'
                                    >
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className='ml-4 line-clamp-1 w-full'>{movieTitle}</span>
                                    </motion.a>


                                })
                                )

                            }
                        </motion.div>)
                }
                {
                    foundResult === 0 && query.length > 4 && isFocus && (
                        <motion.div
                            key="results"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                            className='w-full h-fit bg-white mt-1 rounded-2xl overflow-hidden absolute z-40'
                        >

                            <motion.a
                                href=""
                                className='px-5 py-2 flex items-center hover:bg-slate-100'
                            >
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className='ml-4 line-clamp-1 w-full'>No Result Found</span>
                            </motion.a>
                        </motion.div>)
                }

            </AnimatePresence>
        </div >
    )
}

export default SearchResult