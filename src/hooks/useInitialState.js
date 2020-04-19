import {useState, useEffect} from 'react';

const useInitialStte = (API) =>{
    const [ countries, setCountries ] = useState([]);
    useEffect(() =>{
        fetch(API)
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.log("Error: ", error))
    }, []);

    return countries
}

export default useInitialStte;