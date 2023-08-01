import React, { useEffect, useRef, useState } from 'react'

// - components
import MovieCaroselCard from './movie-carosel-card'
import MovieCaroselImage from './movie-carosel-image'
import MovieCaroselTitle from './movie-carosel-title'
import MovieCaroselRating from "./movie-carosel-rating"
import MovieCaroselInfo from './movie-carosel-info'
import MovieSlideSkeleton from './movie-carosel-skeleton'

// - third-party
import axios from 'axios';
import clsx from 'clsx';



const MovieCarosel = () => {

    const [movieSlideOrder, setMovieSlideOrder] = useState(6)
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("complete");

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

    // useEffect(() => {
    //     setStatus("loading")
    //     const controller = new AbortController();

    //     const getTopRateMovies = async () => {
    //         try {
    //             const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=64856b8001240b857da978b710b84599`, { signal: controller.signal })

    //             const trendingMovies = await res.data.results
    //             console.log(trendingMovies.slice(0, 6))
    //             setMovies(trendingMovies.slice(0, 5));
    //             setStatus("complete")
    //         } catch (error) {
    //             console.log(error)
    //             setStatus("error")

    //         }

    //         // return results;

    //     }
    //     const delayAPI = setTimeout(() => {
    //         getTopRateMovies();
    //     }, 3000)

    //     return () => {
    //         controller.abort();
    //         clearTimeout(delayAPI);
    //     }


    // }, [])

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

    if (status === "loading")
        return (<MovieSlideSkeleton />)

    if (status === "error")
        return <div>Something is wrong</div>

    if (status === "complete")
        return (
            <MovieCaroselCard
                image={<MovieCaroselImage />}
                title={<MovieCaroselTitle movieTitle="Transformer" />}
                rating={<MovieCaroselRating />}
                info={<MovieCaroselInfo />}
            />
        )

    // return (
    //     <section className='bg-slate-600 w-1/2'>

    //         {/* {status === "loading" && <MovieSlideSkeleton />}
    //         {status === "Error" && <h1>Something went wrong</h1>}
    //         {status == "complete" && <div className='w-[clamp(340px,25vw+1rem,400px)] h-[329px] m-auto'></div>}
    //         {status === "complete" &&
    //             movies?.map((movie, index) => (

    //                 <a href="" key={movie.id} className={getMovieSlideStyle(index + 2)}>
    //                     <MovieImage image={movie.poster_path} />
    //                     <Rating />
    //                     <MovieInfo name={movie.title} overview={movie.overview} />
    //                 </a >)
    //             )

    //         } */}
    //     </section>
    // )
}

export default MovieCarosel