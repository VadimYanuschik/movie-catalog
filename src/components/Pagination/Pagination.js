import React from 'react';
import './Pagination.scss';

function Pagination(props) {
    return (
        <div className="pagination">
            <span className="pagination__link">&#60;</span>
            <span className="pagination__link active">1</span>
            <span className="pagination__link">2</span>
            <span className="pagination__link">3</span>
            <span className="pagination__link">&#62;</span>
        </div>
    );
}

export default Pagination;