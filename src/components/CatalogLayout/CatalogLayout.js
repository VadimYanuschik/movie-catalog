import React, {useContext} from 'react';
import './CatalogLayout.scss';
import Movie from '../Movie/Movie';
import {Context} from '../../context';
import Loader from '../Loader/Loader';


function CatalogLayout() {
    const {results, isLoading} = useContext(Context);
    return (
        <div className="catalog-layout">
            {isLoading
                ? <Loader/>
                : (results !== undefined && results.map(({Title, Type, Year, Poster, imdbID}) => (
                    <Movie key={imdbID} Title={Title} Type={Type} Year={Year} Poster={Poster}/>
                )))
            }
        </div>
    );
}

export default CatalogLayout;