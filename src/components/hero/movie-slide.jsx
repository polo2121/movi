import React, { useEffect, useRef, useState } from 'react'

// - components
import Rating from './rating'
import MovieInfo from './movie-info'
import MovieImage from './movie-image'
import MovieSlideSkeleton from './movie-slide-skeleton'

// - assets
import flash from '../../assets/images/the-flash-2x.png'
import elemental from '../../assets/images/elemental.png'
import transformer from '../../assets/images/transformer.png'
import spiderVerse from '../../assets/images/spider-verse.png'
import noHardFeeling from '../../assets/images/no-hard-feeling.png'

// - third-party
import axios from 'axios';
import clsx from 'clsx';



const MovieSlide = () => {

    const [movieSlideOrder, setMovieSlideOrder] = useState(6)
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setMovieSlideOrder((order) => {
                if (order == 1)
                    return 6

                if (order >= 0 && order <= 6)
                    return order - 1


            })
        }, 6000);
        return () => clearInterval(interval);

    }, [])

    useEffect(() => {
        setStatus("loading")
        const controller = new AbortController();

        const getTopRateMovies = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=64856b8001240b857da978b710b84599`, { signal: controller.signal })

                const trendingMovies = await res.data.results
                console.log(trendingMovies.slice(0, 6))
                setMovies(trendingMovies.slice(0, 5));
                setStatus("done")
            } catch (error) {
                console.log(error)
                setStatus("error")

            }

            // return results;

        }
        const delayAPI = setTimeout(() => {
            getTopRateMovies();
        }, 3000)

        return () => {
            controller.abort();
            clearTimeout(delayAPI);
        }


    }, [])

    const movieSlideBase = 'absolute w-[400px] h-[329px] m-auto inset-0 transition-transform delay-200'

    const getMovieSlideStyle = (orderNum) => {

        let rotateDeg;
        if (orderNum % 2)
            rotateDeg = "rotate-[4deg]"
        else
            rotateDeg = "rotate-[-4deg]"

        let movieSlideStyle = clsx(
            movieSlideBase,
            orderNum === 6 ? "rotate-[0deg]" : movieSlideOrder > 1 && movieSlideOrder <= orderNum ? "rotate-[0deg]" : rotateDeg,
            movieSlideOrder > 1 && movieSlideOrder < orderNum && "fade-out-bck",
            movieSlideOrder === 1 && "fade-in-fwd"

        )
        return movieSlideStyle;
    }

    return (
        <>
            {status === "loading" && <MovieSlideSkeleton />}
            {status === "Error" && <h1>Something went wrong</h1>}
            {status == "done" && <div className='w-[400px] h-[329px] m-auto'></div>}
            {status === "done" &&
                movies?.map((movie, index) => (

                    <a href="" key={movie.id} className={getMovieSlideStyle(index + 2)}>
                        <MovieImage image={movie.poster_path} />
                        <Rating />
                        <MovieInfo name={movie.title} overview={movie.overview} />
                    </a >)
                )

            }

            {/* <div className={getMovieSlideStyle(3)}>
                <MovieImage image={flash} />
                <Rating />
                <MovieInfo name="The Flash" />
            </div >


            <div className={getMovieSlideStyle(4)}>
                <MovieImage image={transformer} />
                <Rating />
                <MovieInfo name="Transformer" />
            </div >


            <div className={getMovieSlideStyle(5)}>
                <MovieImage image={elemental} />
                <Rating />
                <MovieInfo name="Elemental" />
            </div >

            <div className={getMovieSlideStyle(6)}>
                <MovieImage image={spiderVerse} />
                <Rating />
                <MovieInfo name="Spider-Verse" />
            </div > */}


        </>
    )
}

export default MovieSlide