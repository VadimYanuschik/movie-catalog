import React from 'react';
import NoPoster from '../../assets/no-poster.jpg';
import './Movie.scss';

function Movie({Poster, Title, Type, Year}) {
    return (
        <div className="movie">
            {Poster === 'N/A'
                ? <img src={NoPoster} alt={Title} className="movie__image"/>
                : <img src={Poster} alt={Title} className="movie__image"/>
            }
            <div className="movie__information">
                <p className="title">Name: {Title}</p>
                <p className="type">Type: {Type}</p>
                <p className="year">Year: {Year}</p>
            </div>
        </div>
    );
}

export default Movie;