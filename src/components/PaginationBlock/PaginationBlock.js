import React from "react";

import "./PaginationBlock.css";
import ReactPaginate from "react-paginate";

const PaginationBlock = ({publicRepos, changeCurrentPage, currentPage, repoInPage}) => {

    const pageCount = Math.ceil(publicRepos / repoInPage);

    const onPageChange = ({selected}) => {

        changeCurrentPage(selected + 1);

    };

    return (

        <div className="paginationBlock">
            <div className="paginationBlock_info">
                {"30"}-{"23"} of {publicRepos} items
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