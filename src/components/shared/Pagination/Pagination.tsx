import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";
import { PaginationIcon } from "../../../assets/icons/PaginationIcon";

interface PaginationProps {
  pageCount: number;
  activePage: number;
  changePageHandler: (selectedItem: { selected: number }) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  changePageHandler,
  activePage,
}) => {
  const PageChangehandler = (selectedItem: { selected: number }) => {
    changePageHandler(selectedItem);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={PageChangehandler}
      forcePage={activePage}
      containerClassName="pagination"
      activeClassName="active"
      pageRangeDisplayed={3} // количество отображаемых страниц
      marginPagesDisplayed={0} // количество отображаемых страниц на краях
      previousLabel={<PaginationIcon />}
      nextLabel={<PaginationIcon />}
      pageClassName="pagination__page"
      pageLinkClassName="pagination__page-link noselect"
      previousClassName="pagination__previous"
      previousLinkClassName="pagination__previous-link noselect"
      nextClassName="pagination__next"
      nextLinkClassName="pagination__next-link noselect"
      breakClassName="pagination__break"
    />
  );
};
