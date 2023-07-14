import React from 'react'

const MovieListSkeleton = () => {
    return (
        <section className='px-10 mt-20 mb-10'>

            <div className='flex justify-between items-center mb-4 animate-pulse'>
                <h5 className='text-[25px] font-bold capitalize w-2/12 h-8 bg-slate-300 rounded-lg'></h5>
                <div className='flex gap-3'>
                    <div className='w-[40px] h-[40px] bg-slate-300 rounded-full'></div>
                    <div className='w-[40px] h-[40px] bg-slate-300 rounded-full'></div>
                </div>

            </div>


            <div className='overflow-hidden animate-pulse flex gap-3'>
                <div className='relative w-[205px] h-[307px] rounded-[30px] bg-slate-300 min-w-[205px]'></div>
                <div className='relative w-[205px] h-[307px] rounded-[30px] bg-slate-300 min-w-[205px]'></div>
                <div className='relative w-[205px] h-[307px] rounded-[30px] bg-slate-300 min-w-[205px]'></div>
                <div className='relative w-[205px] h-[307px] rounded-[30px] bg-slate-300 min-w-[205px]'></div>
                <div className='relative w-[205px] h-[307px] rounded-[30px] bg-slate-300 min-w-[205px]'></div>
                <div className='relative w-[205px] h-[307px] rounded-[30px] bg-slate-300 min-w-[205px]'></div>

            </div>
        </section >
    )
}

export default MovieListSkeleton