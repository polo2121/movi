import React, { useCallback, useEffect, useState } from 'react'


// - third-party
import debounce from 'lodash.debounce';

const useScreenSize = () => {

    const [screenSize, setScreenSzie] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const debouncedUpdateScreenSize = useCallback(debounce(() => {
        setScreenSzie([window.innerWidth, window.innerHeight])
    }, 500), [])


    useEffect(() => {
        window.addEventListener('resize', debouncedUpdateScreenSize);

        return (() => {
            window.removeEventListener('resize', debouncedUpdateScreenSize);
        })
    }, [])

    return { screenSize }
}

export default useScreenSize