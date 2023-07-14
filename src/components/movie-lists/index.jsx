import React, { useEffect, useState, useRef } from 'react'

// - components
import MovieCard from '../movie-card'
import NextButton from './next-button';
import PreviousButton from './previous-button';
import MovieListSkeleton from './movie-list-skeleton';

// - third-party
import { motion } from 'framer-motion';
import axios from 'axios';



const MovieLists = ({ title }) => {


    const [movieLists, setMovieLists] = useState([]);

    const [status, setStatus] = useState("loading");
    const [moveValue, setMoveValue] = useState(0);
    const [moveLimit, setMoveLimit] = useState(0);
    const [moveWidth, setMoveWidth] = useState(0);
    const [showControl, setShowControl] = useState("");
    const [screenSize, setScreenSize] = useState(getCurrentDimension());


    const movieCarosel = useRef();

    const movieByLists = {
        "in threater": "now_playing",
        "trending": "popular",
        "upcoming": "upcoming"
    }

    useEffect(() => {
        setStatus("loading");
        const controller = new AbortController();

        const delayAPI = setTimeout(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieByLists[title]}?language=en-US&page=1&api_key=64856b8001240b857da978b710b84599`, { signal: controller.signal })
                .then(function (response) {
                    // handle success
                    console.log(response);
                    setMovieLists(response.data.results)
                    setStatus("done");
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    setStatus("error");
                })
        }, 3000)

        return () => {
            controller.abort();
            clearTimeout(delayAPI);
        }

    }, [])

    useEffect(() => {
        const updateScreenSize = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateScreenSize);

        return (() => {
            window.removeEventListener('resize', updateScreenSize);
        })
    }, [])

    useEffect(() => {
        console.log("movie list, screen")
        const limit = movieCarosel.current?.scrollWidth - movieCarosel.current?.offsetWidth

        if (screenSize.width > 1382) {
            setMoveLimit(limit)
            setMoveWidth(1080)
        }
        else if (screenSize.width > 1174) {
            setMoveWidth(868)
        }
        else if (screenSize.width > 960) {
            setMoveWidth(651)
        }
        else {
            setMoveWidth(434)
        }
    }, [screenSize, movieLists])

    useEffect(() => {
        controlButtonStatus();
    }, [moveValue])

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    function controlButtonStatus() {
        const moveValueWidth = Math.abs(moveValue)

        if (moveValueWidth > moveLimit) {
            console.log("ss")
            setShowControl("back")
        }
        else if (moveValueWidth === 0) {
            setShowControl("next")
        }
        else {
            setShowControl("next_back")
        }
    }

    const nextSlide = () => {
        setMoveValue((moveValue - moveWidth))
    }

    const prevSlide = () => {
        setMoveValue((moveValue + moveWidth))
    }

    if (status === "loading")
        return <MovieListSkeleton />

    if (status === "error")
        return <h1>Something went wrong</h1>

    if (status === "done")
        return (
            <section className='px-10'>
                <div className='flex justify-between items-center mb-4'>
                    <h5 className='text-[25px] font-bold capitalize'>{title}</h5>
                    <div className='flex gap-3'>
                        <PreviousButton onPrev={prevSlide} showControl={showControl} />
                        <NextButton onNext={nextSlide} showControl={showControl} />
                    </div>

                </div>
                <div className='overflow-hidden'>
                    <motion.div
                        ref={movieCarosel}
                        drag="x"
                        animate={{
                            x: moveValue,
                            transition: { x: { type: 'spring', stiffness: 300, damping: 30 } },
                        }}
                        className='w-full h-[400px] flex overflow gap-3 flex-start'>
                        {
                            movieLists.map(movie => (
                                <MovieCard key={movie.id} name={movie.title} imagePath={movie.poster_path} releaseDate={movie.release_date} />
                            ))
                        }
                    </motion.div>
                </div>
            </section >)
}

export default MovieLists