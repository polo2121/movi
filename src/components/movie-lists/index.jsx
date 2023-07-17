import React, { useEffect, useState, useRef } from 'react'

// - components
import MovieCard from '../movie-card'
import NextButton from './next-button';
import PreviousButton from './previous-button';
import MovieListSkeleton from './movie-list-skeleton';

// - assets
import Flash from "../../assets/images/the-flash-2x.png"

// - third-party
import { motion } from 'framer-motion';
import useFetchMovieLists from '../../hooks/useFetchMovieLists';
import useScreenSize from './useScreenSize';



const MovieLists = ({ title }) => {


    const [movieLists, setMovieLists] = useState([]);

    const [status, setStatus] = useState("complete");
    const [moveValue, setMoveValue] = useState(0);
    const [showControl, setShowControl] = useState("");



    // const { status, movieLists } = useFetchMovieLists();
    const { screenSize } = useScreenSize();

    console.log(movieLists)
    const movieSlide = useRef();



    const movieByLists = {
        "in threater": "now_playing",
        "trending": "popular",
        "upcoming": "upcoming"
    }

    const nextSlide = () => {
        setMoveValue((moveValue - 100));
    }

    const prevSlide = () => {
        setMoveValue((moveValue + moveWidth))
    }

    return (
        <section className='px-10 mb-4' ref={movieSlide}>
            {status === "loading" && <MovieListSkeleton />}
            {status === "error" && <h1>something went wrong</h1>}
            {status === "complete" && (
                <>
                    <p>{screenSize[0]}</p>
                    <div className='flex justify-between items-center mb-4'>
                        <h5 className='text-[25px] font-bold capitalize'>{title}</h5>
                        <div className='flex gap-3'>
                            <PreviousButton onPrev={prevSlide} showControl={showControl} />
                            <NextButton onNext={nextSlide} showControl={showControl} />
                        </div>

                    </div>
                    <div className='overflow-hidden'>

                        <motion.div
                            className="flex w-full opacity-100"
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