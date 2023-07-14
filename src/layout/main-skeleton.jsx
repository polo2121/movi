import React from 'react'


const MainSkeleton = () => {
    return (
        <nav className='w-[240px] h-screen fixed shadow-2xl px-4 text-[14px] animate-pulse'>
            <div className='bg-slate-300 rounded-[10px] mb-4 h-10 w-1/2 my-4 m-auto'></div>
            {/* <img className="p-10 bg-slate-300 rounded-[10px] mb-4" src="" alt="movi-logo" loading='lazy' /> */}
            <ul className='text-[17px] flex flex-col gap-1 capitalize mb-4'>
                <span className='w-1/2 h-8 px-10 bg-slate-300 rounded-[10px]'></span>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>

                    </li>
                </a>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>

                    </li>
                </a>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>

                    </li>
                </a>

            </ul>

            <ul className='text-[17px] flex flex-col gap-1 capitalize mb-4'>
                <span className='w-1/2 h-8 px-10 bg-slate-300 rounded-[10px]'></span>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>
                    </li>
                </a>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>
                    </li>
                </a>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>
                    </li>
                </a>
            </ul>

            <ul className='text-[17px] flex flex-col gap-1 capitalize mb-4'>
                <span className='w-1/2 h-8 px-10 bg-slate-300 rounded-[10px]'></span>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>

                    </li>
                </a>
                <a className="rounded-[10px] bg-slate-300">
                    <li className='w-full h-10 pl-10 py-2 flex gap-3 '>

                    </li>
                </a>
            </ul>
        </nav >
    )
}

export default MainSkeleton