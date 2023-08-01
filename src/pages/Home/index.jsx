import React, { Children } from 'react'


// - components
import Hero from '../../components/hero'
import Breadcrumb from '../../components/breadcrumb'
import Search from '../../components/search'
import MovieLists from '../../components/movie-lists'

// - third-party
import clsx from 'clsx'

const Home = () => {
    return (
        <>

            <Header
                breadcrumb={<Breadcrumb title="home" />}
                search={<Search />} />
            <Hero />

            {/* <MovieLists title="in threater" /> */}
            {/* <MovieLists title="trending" />
            <MovieLists title="upcoming" /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Home

function Header({ breadcrumb, search }) {

    const headerCss = clsx('flex justify-between items-center bg-blue-light py-10 px-6')
    return (
        <div className={headerCss}>
            {breadcrumb}
            <div className=''>
                {search}
            </div>
        </div>
    )
}