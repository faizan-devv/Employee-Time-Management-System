import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = (props) => {
    return (
        <div>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={props.PageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={props.PageChange}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'page-item active'}
            />
        </div>
    )
}

export default Pagination;