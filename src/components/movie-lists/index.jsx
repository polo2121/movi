import React, { useEffect, useState, useRef } from 'react'

// - components
import MovieCard from '../movie-card'
import NextButton from './next-button';
import PreviousButton from './previous-button';
import MovieListSkeleton from './movie-list-skeleton';


// - hooks
import useFetchMovieLists from '../../hooks/useFetchMovieLists';
import useScreenSize from '../../hooks/useScreenSize';


// - third-party
import { motion } from 'framer-motion';




const MovieLists = ({ title }) => {


    const [movieLists, setMovieLists] = useState([]);

    const [status, setStatus] = useState("complete");
    const [moveValue, setMoveValue] = useState(0);
    const [moveLimit, setMoveLimit] = useState(0);
    const [showControl, setShowControl] = useState("next");

    const movieSlideRef = useRef();
    // const { status, movieLists } = useFetchMovieLists();
    const { screenSize } = useScreenSize();

    useEffect(() => {
        console.log("Move Value Effect")
        console.log(moveValue)

        let value = Math.abs(moveValue)
        if (value === moveLimit) {
            console.log("back")
            setShowControl("back")

        }
        if (value >= 0 && value < moveLimit)
            setShowControl("next_back")
        if (value === 0)
            setShowControl("next")

    }, [moveValue])

    useEffect(() => {

        console.log("Screen Size Effect")

        if (screenSize[0] <= 1600 && screenSize[0] >= 1040)
            setMoveLimit(300)

        if (screenSize[0] <= 1040 && screenSize[0] >= 700)
            setMoveLimit(400)

        if (screenSize[0] <= 700 && screenSize[0] >= 600)
            setMoveLimit(600)

    }, [screenSize[0]])

    const movieByLists = {
        "in threater": "now_playing",
        "trending": "popular",
        "upcoming": "upcoming"
    }

    const nextSlide = () => {
        setMoveValue((moveValue - 100));

    }

    const prevSlide = () => {
        setMoveValue((moveValue + 100))
    }

    return (
        <section className='px-10 mb-4'>
            {status === "loading" && <MovieListSkeleton />}
            {status === "error" && <h1>something went wrong</h1>}
            {status === "complete" && (
                <>
                    <p>{screenSize[0]}{moveLimit}</p>
                    <div className='flex justify-between items-center mb-4'>
                        <h5 className='text-[20px] md:text-[25px] font-bold capitalize'>{title}</h5>
                        <div className='flex gap-3'>
                            <PreviousButton onPrev={prevSlide} showControl={showControl} />
                            <NextButton onNext={nextSlide} showControl={showControl} />
                        </div>

                    </div>
                    <div className='overflow-hidden'>

                        <motion.div
                            className="flex w-full opacity-100"
                            ref={movieSlideRef}
                            animate={{
                                x: moveValue + "%",
                                transition: { x: { type: 'spring', stiffness: 80, damping: 10 }, },
                            }}
                        >
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Hunter" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />

                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />

                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />


                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />
                            <MovieCard name="Galaxy" imagePath="nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg" releaseDate="2023" />


                            {/* {
                            movieLists.map(movie => (
                                <MovieCard key={movie.id} name={movie.title} imagePath={movie.poster_path} releaseDate={movie.release_date} />
                            ))
                        } */}
                        </motion.div>
                    </div>
                </>)
            }
        </section >)
}

export default MovieLists