import React from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);
    React.useEffect(() => {
        const matchQueryList = window.matchMedia(query);
        console.log(matchQueryList)

        function handleChange(e) {
            setMatches(e.matches);
        }
        matchQueryList.addEventListener("change", handleChange);
        return () => {
            matchQueryList.removeEventListener("change", handleChange);
        };
    }, [query]);
    return matches;
}

export default useMediaQuery