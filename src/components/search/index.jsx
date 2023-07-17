import React, { useCallback, useEffect, useState } from 'react'

// - components
import SearchResult from '../search/search-result'
import SearchInput from './search-input';

// - api
import axios from 'axios';

// - third-party
import debounce from 'lodash.debounce';


const Search = () => {

    const [isInputFocus, setIsInputFocus] = useState(false);
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    const [searchController, setSearchController] = useState();
    const [foundResult, setFoundResult] = useState()


    const getSearchResults = async (searchQuery) => {
        const controller = new AbortController();

        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=64856b8001240b857da978b710b84599`, { signal: controller.signal })
            console.log(res)

            const searchResults = await res.data

            return searchResults;

        } catch (error) {
            console.log(error)
        } finally {
            controller.abort();
        }
    }

    const searchRequest = debounce(async (searchQuery) => {
        const data = await getSearchResults(searchQuery);
        console.log(data)
        setFoundResult(data.total_results)
        setQueryResults(data.results)
    }, 500)

    const debouncedRequest = useCallback((searchQuery) => searchRequest(searchQuery), [])

    const handleFocus = () => {
        setSearchController(new AbortController());
        if (isInputFocus === true) {
            console.log("starting to abort")
            searchController.abort();

        }
        console.log("win nay ")
        setIsInputFocus(!isInputFocus)
        setQueryResults([]);
    }

    const handleQuery = (e) => {
        setQuery(e.target.value)
        debouncedRequest(e.target.value);
    }


    return (
        <>
            <SearchInput query={query} onSearch={handleQuery} isFocus={isInputFocus} onFocus={handleFocus} />
            <SearchResult queryResults={queryResults} foundResult={foundResult} query={query} isFocus={isInputFocus} />
        </>
    )
}

export default Search