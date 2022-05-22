import React from "react";
import ReactPaginate from "react-paginate";

import { ITEM_PER_PAGE_NUMBER } from "../../constants";

import "./PaginationBlock.css";


const PaginationBlock = ({ totalItemsNumber, onChangeCurrentPage, currentPage, itemsCountsOnPage }) => {
  const totalPagesCount = Math.ceil(totalItemsNumber / ITEM_PER_PAGE_NUMBER);

  const handleChangePage = ({ selected }) => {
    onChangeCurrentPage(selected + 1);
  };

  const getFirstAndLastNumberItems = (currentPage, itemPerPageNumber, itemsCountsOnPage) => {
    const prevPage = currentPage - 1;
    const numberOfPrevItems = itemPerPageNumber * prevPage;
    const firstNumberItem = numberOfPrevItems + 1;
    const lastNumberItem = (firstNumberItem + itemsCountsOnPage) - 1;

    return {
      firstNumberItem,
      lastNumberItem
    };
  };

  const firstAndLastNumberItems = getFirstAndLastNumberItems(currentPage, ITEM_PER_PAGE_NUMBER, itemsCountsOnPage);
  
  return (
    <div className="paginationBlock">
      <div className="paginationBlock_info">
        {firstAndLastNumberItems.firstNumberItem}-{firstAndLastNumberItems.lastNumberItem} of {totalItemsNumber} items
      </div>
      <ReactPaginate
        pageCount={totalPagesCount}
        breakLabel="..."
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={"<"}
        nextLabel={">"}
        onPageChange={handleChangePage}
        initialPage={currentPage - 1}
        containerClassName={"paginationBtn"}
        activeClassName={"activeBtn"}
      />
    </div>
  );
};


export { PaginationBlock };