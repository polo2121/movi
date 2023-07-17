import React from 'react'

// - components
import Search from '../search'

const TitleBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <h5 className='uppercase text-[22px] font-bold'>HOME</h5>
            <div className='bg-slate-00'>
                <Search />
            </div>

        </div>
    )
}

export default TitleBar