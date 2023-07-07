import React from 'react'

// - components
import Hero from '../../components/hero'
import MovieLists from '../../components/movie-lists'

const Home = () => {
    return (
        <>
            <Hero />
            <MovieLists title="in threater" />
        </>
    )
}

export default Home