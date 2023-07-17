import React, { useEffect, useState } from 'react'


// - api
import TMDBApi from "../utils/api"

const useFetchMovieLists = () => {

    const [status, setStatus] = useState(null);
    const [movieLists, setMovieLists] = useState([]);

    useEffect(() => {
        setStatus("loading");
        const controller = new AbortController();

        const delayAPI = setTimeout(async () => {

            try {
                const res = await TMDBApi.get("/movie/now_playing", { signal: controller.signal })
                const results = await res.data.results
                console.log(res)
                setMovieLists(results)
                setStatus('complete')

            } catch (error) {
                console.log(error);
                setStatus("error")
            } finally {
                controller.abort();
            }

        }, 3000)

        return () => {
            controller.abort();
            clearTimeout(delayAPI);
        }

    }, [])

    return { status, movieLists }
}

export default useFetchMovieLists