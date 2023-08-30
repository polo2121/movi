import React, { useState, useRef, useEffect, useCallback } from 'react'


// - components
import MovieLink from './movie-link';
import MovieLinkSkeleton from './movie-link-skeleton';
import Control from "./components/control/control"
import NextButton from './components/control/next-button';
import PreviousButton from './previous-button'

// - api
import TMDBApi from '../../utils/api';

// - hooks
import useScreenSize from '../../hooks/useScreenSize';


// - assets

// - third-party
import clsx from 'clsx'
import { motion } from 'framer-motion';



const MovieCard = () => {

    const [itemPerScreen, setItemPerScreen] = useState(0)
    const [moveSlide, setMoveSlide] = useState(0);
    const [movies, setMovies] = useState([]);
    const [fetchStatus, setFetchStatus] = useState("loading");

    const { screenSize } = useScreenSize();
    const broswerWidth = screenSize[0]

    const movieListWrapperRef = useRef();

    useEffect(() => {
        if (broswerWidth >= 480 && broswerWidth <= 639) {
            setItemPerScreen(3);
        }
        if (broswerWidth >= 450 && broswerWidth <= 600) {
            setItemPerScreen(2);
        }
        if (broswerWidth <= 450) {
            setItemPerScreen(1);
        }
    }, [broswerWidth])

    useEffect(() => {
        setFetchStatus("loading")
        const controller = new AbortController();
        const startFetching = async () => {
            const res = await TMDBApi.getMovieByList('now_playing', controller)
            const data = res.data.results
            console.log(data)
            setMovies(data);
            setFetchStatus("succeded");
        }

        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
            startFetching();

        }, 3000);
        return () => {
            controller.abort();
            clearTimeout(timer)
        }
    }, [])

    const handleNext = useCallback(() => {
        setMoveSlide((prev) => {
            return prev - 1;
        })
    }, [])

    const handlePrev = useCallback(() => {
        setMoveSlide((prev) => {
            return prev + 1
        })
    }, [])

    const movieSlideCss = clsx(`flex flex-${itemPerScreen}`);
    const movieCardCss = clsx(itemPerScreen === 1 ? "w-[94%]" : "w-[90%]");
    const movieCardSkeletonCss = clsx(itemPerScreen === 1 ? 'w-[94%]' : "w-[90%]", 'absolute z-30');


    return <>
        <section ref={movieListWrapperRef} className=' bg-puple-400 w-full flex flex-col mt-4'>
            <motion.div animate={{ x: `${moveSlide * 100}%`, transition: { type: "spring", stiffness: 100 } }} className='w-full h-fit gap-3 flex flex-1' >
                <div className={movieSlideCss}>
                    {
                        fetchStatus === "succeded"
                            ?
                            movies.map(movie => (<MovieLink key={movie.id} movie={movie} />))
                            : [...Array(10).keys()].map(i => (MovieLinkSkeleton))
                    }

                </div>
            </motion.div>
            <Control>
                <PreviousButton onPrev={handlePrev} itemPerScreen={itemPerScreen} moveSlide={moveSlide} />
                <NextButton onNext={handleNext} itemPerScreen={itemPerScreen} moveSlide={moveSlide} />
            </Control>
        </section >

    </>
}

export default MovieCard;