import React, {useState} from 'react';
import './MovieInfo.css';

function MovieInfo() { 
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            console.log(searchParam);
            const apiUrl = `https://www.omdbapi.com/?apikey=8c85bfdc&s=${searchParam}&r=json`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            console.log(response["Search"]);
            setMovies(response['Search']);
        }
        fetchMyAPI();
    }

    return(
        <div className = "movieinfo">
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "queryInput">
                    Search Movie Name:
                </label>
                <input
                    id = "queryInput"
                    type = "text"
                    value = {query}
                    onChange = {e => setQuery(e.target.value)}
                />
                <button className = "search">Submit</button>
            </form>
        </div>
    )
}

export default MovieInfo;