import React from 'react';
import './Catalog.scss';
import Pagination from '../Pagination/Pagination';
import SearchResults from '../SearchResults/SearchResults';
import CatalogLayout from '../CatalogLayout/CatalogLayout';

function Catalog() {
    return (
        <div className="catalog">
            <div className="container">
                <SearchResults/>
                <CatalogLayout/>
                <Pagination/>
            </div>
        </div>
    );
}

export default React.memo(Catalog);