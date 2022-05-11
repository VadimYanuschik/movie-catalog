import React, {useState, useEffect} from 'react';
import './Catalog.scss';
import Movie from '../Movie/Movie';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

function Catalog(props) {
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    const getData = async () => {
        const {data} = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman')
        setMovies(data.Search);
        setTotalResults(data.totalResults);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="catalog">
            <div className="container">
                <div className="search-results">
                    You searched for: <span className="search-query">Batman</span>,
                    <span className="search-count"> {totalResults}</span> result found
                </div>
                <div className="catalog-layout">
                    {movies.map(({Poster, Title, Type, Year}) => (
                        <Movie Poster={Poster} Title={Title} Type={Type} Year={Year}/>
                    ))}
                </div>
                <Pagination/>
            </div>
        </div>
    );
}

export default Catalog;