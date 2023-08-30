import React from 'react'

const MovieLinkSkeleton = () => {
    return (
        <div className='flex flex-1 flex-col animate-pulse'>
            <div className={movieCardCss}>
                <div className="opacity-1 rounded-lg relative z-10 before:content-[''] before:block before:w-full before:h-full before:bg-zinc-300 before:absolute before:-inset-0 before:z-20 before:rounded-lg">
                    <img width="100%" className="opacity-1 bg-zinc-300 relative z-10" src={LoadingImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MovieLinkSkeleton