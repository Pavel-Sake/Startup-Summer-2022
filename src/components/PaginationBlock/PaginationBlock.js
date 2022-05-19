import React from "react";
import ReactPaginate from "react-paginate";

import "./PaginationBlock.css";


const PaginationBlock = ({publicRepos, changeCurrentPage, currentPage, repoInPage, showRepoStart, showRepoFinish}) => {

    const pageCount = Math.ceil(publicRepos / repoInPage);

    const onPageChange = ({selected}) => {
        changeCurrentPage(selected + 1);
    };


    return (
        <div className="paginationBlock">
            <div className="paginationBlock_info">
                {showRepoStart}-{showRepoFinish} of {publicRepos} items
            </div>
            <ReactPaginate
                pageCount={pageCount}  //check
                breakLabel="..."
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel={"<"}
                nextLabel={">"}
                onPageChange={onPageChange}
                initialPage={currentPage - 1}
                containerClassName={"paginationBtn"}
                activeClassName={"activeBtn"}
            />
        </div>
    );
};


export { PaginationBlock };