import React, { Children } from 'react'


// - components
import Hero from '../../components/hero'
import Breadcrumb from '../../components/breadcrumb'
import Search from '../../components/search'
import Logo from '../../components/logo'

import MovieList from '../../components/movie-lists'
import Community from '../../components/community'
import SignUp from '../../components/signup'


// - third-party
import clsx from 'clsx'

const Home = () => {
    return (
        <>

            <Header
                breadcrumb={<Breadcrumb title="home" />}
                search={<Search />} />
            <Hero />
            <MovieList />
            <SignUp />
            <Community />

            {/* <MovieLists title="in threater" /> */}
            {/* <MovieLists title="trending" />
            <MovieLists title="upcoming" /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Home

function Header({ breadcrumb, search }) {

    const headerCss = clsx(
        'flex flex-col gap-6 bg-blue-light py-6 px-6',
        'sm:items-center sm:py-10'
    )
    return (
        <>
            <div className='sm:hidden bg-blue-light flex items-center shadow-xl px-6'>
                <Logo />
            </div>
            <div className={headerCss}>
                {breadcrumb}
                <div className=''>
                    {search}
                </div>
            </div>
        </>

    )
}