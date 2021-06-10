import React, {useState} from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() { 
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            console.log(searchParam);
            const apiUrl = `https://www.omdbapi.com/?apikey=8c85bfdc&s=${searchParam}&r=json&type=movie`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            console.log(response["Search"]);
            setMovies(response['Search']);
        }
        fetchMyAPI();
        setQuery('');
    }

    return(
        <div className = "movieinfo">
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "queryInput">
                    Enter Movie Title:
                </label>
                <input
                    id = "queryInput"
                    type = "text"
                    value = {query}
                    onChange = {e => setQuery(e.target.value)}
                />
                <button className = "search">Submit</button>
            </form>
            <Movies movies = {movies}>

            </Movies>
        </div>
    )
}

export default MovieInfo;