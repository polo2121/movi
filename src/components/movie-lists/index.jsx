import React, { useEffect, useState } from 'react'

// - components
import MovieCard from '../movie-card'
import axios from 'axios';


const MovieLists = ({ title }) => {


    const [movieLists, setMovieLists] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=64856b8001240b857da978b710b84599', { signal: controller.signal })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        return () => {
            controller.abort()
        }

    }, [])

    return (
        <section className='mb-10 px-10'>
            <h5 className='text-[25px] capitalize'>{title}</h5>
            <div className=' bg-slate-500 w-[100%] h-[400px] flex overflow-x-scroll gap-3 flex-start'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </section>
    )
}

export default MovieLists