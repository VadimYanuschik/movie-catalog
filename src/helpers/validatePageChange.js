export default function validatePageChange(clickedPage, currentPage, pages) {
    if (clickedPage === 'prev') {
        if(Number(currentPage) === 1) return 1
        if(Number(currentPage) !== pages.startPage) return (Number(currentPage) - 1);
    }
    if (clickedPage === 'next') {
        if(Number(currentPage) === pages.totalPages) return pages.totalPages;
        if(Number(currentPage) !== pages.totalPages) return (Number(currentPage) + 1);

    }
    if (clickedPage !== 'prev' && clickedPage !== 'next') {
        return clickedPage;
    }
}