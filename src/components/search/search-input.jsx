import React, { useState } from 'react'

// - third-party
import clsx from 'clsx';

const SearchInput = ({ query, onSearch, isFocus, onFocus }) => {

    const searchInput = clsx(
        'flex gap-1  border-2 border-blue-normal w-full h-12 rounded-full relative bg-white transition-transform',
        'sm:w-[310px]',
        isFocus && 'translate-y-[-10px]',
        !isFocus && 'translate-y-[0px]'
    )

    return (
        <div className={searchInput}>

            <div className="absolute flex items-center left-4 inset-y-0" >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>

            <input className="w-full pl-12 rounded-full" type="text" placeholder='Search with movie name...' onFocus={onFocus} onBlur={onFocus} onChange={(e) => onSearch(e)} value={query} />

        </div>
    )
}

export default SearchInput